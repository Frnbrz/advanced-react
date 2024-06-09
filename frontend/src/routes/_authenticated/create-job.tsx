
import { smallSphere, stars } from "@/assets"
import Button from "@/components/Button"
import Heading from "@/components/Heading"
import Section from "@/components/Section"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { createJob, getAllJobsQueryOptions, loadingJobsNavigationOptions } from "@/lib/api"
import { createJobSchema } from "@server/sharedTypes"
import { FieldApi, useForm } from '@tanstack/react-form'
import { useQueryClient } from "@tanstack/react-query"
import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { zodValidator } from '@tanstack/zod-form-adapter'

import { toast } from "sonner"




// eslint-disable-next-line @typescript-eslint/no-explicit-any
function FieldInfo({ field }: { field: FieldApi<any, any, any, any, any> }) {
  return (
    <>
      {field.state.meta.touchedErrors ? (
        <em className="block text-red-600">{field.state.meta.touchedErrors}</em>
      ) : null}
      {field.state.meta.isValidating ? 'Validating...' : null}
    </>
  )
}

export const Route = createFileRoute('/_authenticated/create-job')({
  component: CreateJob,
})




function CreateJob() {
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  const form = useForm({
    defaultValues: {
      title: '',
      company: '',
      city: '',
      stack: '',
      skills: '',
      url: '',
      modality: '',
      img: '',
    },
    validatorAdapter: zodValidator,
    onSubmit: async ({ value }) => {
      const existingJobs = await queryClient.ensureQueryData(
        getAllJobsQueryOptions
      )

      navigate({ to: "/jobs" })

      queryClient.setQueryData(loadingJobsNavigationOptions.queryKey, {
        job: value
      })

      try {
        const newJob = await createJob({ value })

        queryClient.setQueryData(getAllJobsQueryOptions.queryKey, {
          ...existingJobs,
          jobs: [newJob, ...existingJobs.jobs],
        })

        toast("job Created", {
          description: `Successfully created new job: ${newJob.id}`,
        })
        // success state
      } catch (error) {
        // error state
        toast("Error", {
          description: `Failed to create new job`,
        })
      } finally {
        queryClient.setQueryData(loadingJobsNavigationOptions.queryKey, {})
      }
    },
  })

  return (
    <Section
      crossesOffset='lg:translate-y-[5.25rem]'
      id='create-job'
    >
      <div className="hidden relative justify-center mb-[1rem] lg:flex">
        <img
          src={smallSphere}
          className="relative z-1"
          width={60}
          height={60}
          alt="Sphere"
        />
        <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <img
            src={stars}
            className="w-full"
            width={950}
            height={400}
            alt="Stars"
          />
        </div>
      </div>


      <Heading
        tag="Crear oferta de empleo"
        title="Nueva oferta de empleo"
      />

      <form
        onSubmit={(e) => {
          e.preventDefault()
          e.stopPropagation()
          form.handleSubmit()
        }}
        className="max-w-xl m-auto"
      >

        <form.Field
          name="title"
          validators={
            {
              onChange: createJobSchema.shape.title
            }
          }
          children={(field) => (
            <>
              <Label htmlFor={field.name}>Nombre oferta:</Label>
              <Input
                id={field.name}
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
              />
              <FieldInfo field={field} />
            </>
          )}
        />

        <form.Field
          name="company"
          validators={
            {
              onChange: createJobSchema.shape.company
            }
          }
          children={(field) => (
            <>
              <Label htmlFor={field.name}>Compañia:</Label>
              <Input
                id={field.name}
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
              />
              <FieldInfo field={field} />
            </>
          )}
        />
        <form.Field
          name="city"
          validators={
            {
              onChange: createJobSchema.shape.city
            }
          }
          children={(field) => (
            <>
              <Label htmlFor={field.name}>Ciudad:</Label>
              <Input
                id={field.name}
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
              />
              <FieldInfo field={field} />
            </>
          )}
        />

        <form.Field
          name="stack"
          validators={
            {
              onChange: createJobSchema.shape.stack
            }
          }
          children={(field) => (
            <>
              <Label htmlFor={field.name}>
                Tecnologias:
              </Label>
              <Input
                id={field.name}
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
              />
              <FieldInfo field={field} />
            </>
          )}
        />
        <form.Field
          name="skills"
          validators={
            {
              onChange: createJobSchema.shape.skills
            }
          }
          children={(field) => (
            <>
              <Label htmlFor={field.name}>
                Habilidades:
              </Label>
              <Input
                id={field.name}
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
              />
              <FieldInfo field={field} />
            </>
          )}
        />

        <form.Field
          name="url"
          validators={
            {
              onChange: createJobSchema.shape.url
            }
          }
          children={(field) => (
            <>
              <Label htmlFor={field.name}>
                Url:
              </Label>
              <Input
                id={field.name}
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
              />
              <FieldInfo field={field} />
            </>
          )}
        />
        <form.Field
          name="modality"
          validators={
            {
              onChange: createJobSchema.shape.modality
            }
          }
          children={(field) => (
            <>
              <Label htmlFor={field.name}>
                Modalidad:
              </Label>
              <Input
                id={field.name}
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
              />
              <FieldInfo field={field} />
            </>
          )}
        />

        <form.Field
          name="img"
          validators={
            {
              onChange: createJobSchema.shape.img
            }
          }
          children={(field) => (
            <>
              <Label htmlFor={field.name}>Imagen:</Label>
              <Input
                id={field.name}
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
              />
              <FieldInfo field={field} />
            </>
          )}
        />
        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
          children={([canSubmit, isSubmitting]) => (

            <Button white type="submit" className="mt-4" disabled={!canSubmit}>
              {isSubmitting ?

                <span className="animate-spin h-5 w-5 mr-3 ">...</span> : 'Submit'}
            </Button>
          )}
        />
      </form>
    </Section>
  )
}






