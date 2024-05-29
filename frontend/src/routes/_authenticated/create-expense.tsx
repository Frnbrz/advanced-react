import Section from "@/components/Section"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { createExpense, getAllExpensesQueryOptions, loadingCreateExpenseQueryOptions } from "@/lib/api"
import { createExpenseSchema } from "@server/sharedTypes"
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

export const Route = createFileRoute('/_authenticated/create-expense')({
  component: CreateExpense,
})


function CreateExpense() {
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  const form = useForm({
    defaultValues: {
      description: '',
      amount: '',
    },
    validatorAdapter: zodValidator,
    onSubmit: async ({ value }) => {
      const existingExpenses = await queryClient.ensureQueryData(
        getAllExpensesQueryOptions
      )

      navigate({ to: "/expenses" })

      // loading state
      queryClient.setQueryData(loadingCreateExpenseQueryOptions.queryKey, {
        expense: value,
      })

      try {
        const newExpense = await createExpense({ value })

        queryClient.setQueryData(getAllExpensesQueryOptions.queryKey, {
          ...existingExpenses,
          expenses: [newExpense, ...existingExpenses.expenses],
        })

        toast("Expense Created", {
          description: `Successfully created new expense: ${newExpense.id}`,
        })
        // success state
      } catch (error) {
        // error state
        toast("Error", {
          description: `Failed to create new expense`,
        })
      } finally {
        queryClient.setQueryData(loadingCreateExpenseQueryOptions.queryKey, {})
      }
    },
  })

  return (
    <Section
      className='pt-[12rem] -mt-[5.25rem]'
      crosses
      crossesOffset='lg:translate-y-[5.25rem]'
      customPaddings='pt-[12rem] -mt-[5.25rem]'
      id='create-expense'
    >

      <form
        onSubmit={(e) => {
          e.preventDefault()
          e.stopPropagation()
          form.handleSubmit()
        }}
        className="max-w-xl m-auto"
      >

        <form.Field
          name="description"
          validators={
            {
              onChange: createExpenseSchema.shape.description
            }
          }
          children={(field) => (
            <>
              <Label htmlFor={field.name}>Description:</Label>
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
          name="amount"
          validators={
            {
              onChange: createExpenseSchema.shape.amount
            }
          }
          children={(field) => (
            <>
              <Label htmlFor={field.name}>Amount:</Label>
              <Input
                id={field.name}
                name={field.name}
                value={field.state.value}
                type=""
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

            <Button type="submit" className="mt-4" disabled={!canSubmit}>
              {isSubmitting ?

                <span className="animate-spin h-5 w-5 mr-3 ">...</span> : 'Submit'}
            </Button>
          )}
        />
      </form>
    </Section>
  )
}