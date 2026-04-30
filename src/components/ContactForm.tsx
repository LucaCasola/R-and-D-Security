// src/components/ContactForm.tsx

"use client"

// UI components from shadcn/ui
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "./ui/button"

// Form validation and functionality
import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import emailjs from '@emailjs/browser';

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|\(d{3}\))[\s-]?\d{3}[\s-]?\d{4}$/
);

const formSchema = z.object({
  firstName: z
    .string()
    .min(1, "First name must not be empty.")
    .max(60, "First name must not be greater than 60 characters."),
  lastName: z
    .string()
    .min(1, "Last name must not be empty.")
    .max(60, "Last name must not be greater than 60 characters."),
  company: z.string().optional(),
  email: z.email("Invalid email address."),
  phone: z.string().regex(phoneRegex, "Invalid phone number."),
  message: z
    .string()
    .min(1, "Message must not be empty.")
    .max(8000, "Message must not be greater than 8000 characters."),
})

type FormData = z.infer<typeof formSchema>

const formVariants = cva(
  "bg-primary-foreground",
  {
    variants: {
      variant: {
        default: "w-full col py-12",
        contained: "p-4 md:p-10 border-6 rounded-4xl ",
      }
    },
    defaultVariants: {
      variant: "default",
    },
  }
)


export default function ContactForm({
  className,
  variant
}: React.ComponentProps<"form"> &
  VariantProps<typeof formVariants>
) {
  // Initialize EmailJS
  emailjs.init({
    publicKey: 'nB1G3J0t1QV7cmKSo',
    // Do not allow headless browsers
    blockHeadless: true,
    blockList: {
      // Block suspended emails
      list: ['foo@example.com'],
      // The variable contains the email address
      watchVariable: 'email',
    },
    limitRate: {
      // Set the limit rate for the application
      id: 'app',
      // Allow 1 request per 100s
      throttle: 100000,
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormData) => {
    console.log("Form submitted:", data)

    emailjs.send("service_contact", "template_contact", {
      firstname: data.firstName,
      lastname: data.lastName,
      company: data.company || "N/A",
      email: data.email,
      phone: data.phone,
      message: data.message,
    })
    .then(
      () => {
        alert("Message sent successfully!")
      },
      (error) => {
        alert("Message failed to send. Please try again later.")
      },
    );

    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} 
      className={cn(formVariants({ variant, className }))}
    >
      <FieldSet className="w-9/10 md:w-xl lg:w-3xl">
        { variant == "default" || variant == undefined ? (
          <FieldLegend className="text-center!">
            <h2>Contact Me</h2>
          </FieldLegend>
        ) : (
          <FieldLegend>
            <h3>Get in Touch</h3>
          </FieldLegend>
        )}
        <FieldDescription className="text-md">
          Have any questions or looking for a quote? Fill out the form below and I'll be in touch within the day.
        </FieldDescription>

        <FieldGroup>
          <FieldGroup className="flex flex-row gap-4">
            <Field>
              <FieldLabel htmlFor="firstName">First Name *</FieldLabel>
              <Input 
                {...register("firstName")}
                className="bg-background" 
                id="firstName" 
                autoComplete="given-name" 
                placeholder="John" 
              />
              {errors.firstName && (
                <FieldError>{errors.firstName.message}</FieldError>
              )}
            </Field>
            <Field>
              <FieldLabel htmlFor="lastName">Last Name *</FieldLabel>
              <Input 
                {...register("lastName")}
                className="bg-background" 
                id="lastName" 
                autoComplete="family-name" 
                placeholder="Smith" 
              />
              {errors.lastName && (
                <FieldError>{errors.lastName.message}</FieldError>
              )}
            </Field>
          </FieldGroup>
          <Field>
            <FieldLabel htmlFor="company">Company</FieldLabel>
            <Input 
              {...register("company")}
              className="bg-background" 
              id="company" 
              autoComplete="organization"
              placeholder="Example Corp" 
            />
            {errors.company && (
              <FieldError>{errors.company.message}</FieldError>
            )}
          </Field>
        </FieldGroup>

        <FieldSeparator />
        <FieldGroup>
          <FieldGroup className="flex flex-row gap-4">
            <Field>
              <FieldLabel htmlFor="email">Email *</FieldLabel>
              <Input 
                {...register("email")}
                className="bg-background" 
                id="email" 
                type="email"
                autoComplete="email"
                placeholder="you@example.com" 
              />
              {errors.email && (
                <FieldError>{errors.email.message}</FieldError>
              )}
            </Field>
            <Field>
              <FieldLabel htmlFor="phone">Phone *</FieldLabel>
              <Input 
                {...register("phone")}
                className="bg-background" 
                id="phone" 
                type="tel"
                autoComplete="tel" 
                placeholder="(123) 456-7890" 
              />
              {errors.phone && (
                <FieldError>{errors.phone.message}</FieldError>
              )}
            </Field>
          </FieldGroup>
          <Field>
            <FieldLabel htmlFor="message">Message *</FieldLabel>
            <Textarea 
              {...register("message")}
              className="bg-background" 
              id="message" 
              rows={4}
              placeholder="Your message..." 
            />
            {errors.message && (
              <FieldError>{errors.message.message}</FieldError>
            )}
          </Field>
        </FieldGroup>

        <Field className="flex justify-center" orientation="horizontal">
          <Button 
            className="p-5" 
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Submit"}
          </Button>
        </Field>
      </FieldSet>
    </form>
  )
}