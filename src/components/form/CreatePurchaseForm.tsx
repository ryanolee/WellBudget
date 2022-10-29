import { useCallback } from "react"
import { Button, Form } from "react-bootstrap"
import { UserDataAction, useUserDataDispatcher } from "../../hooks/userContext"
import { Category } from "../../types/budget"

const CreatePurchaseForm: React.FC<{}> = () => {
  const dispatcher = useUserDataDispatcher()
  const onSubmit = useCallback(() => {
    if (!dispatcher) return;
    dispatcher({
      type: UserDataAction.CREATE_PURCHASE, { category: Category.Food, amount: 2 }
        })
}, [dispatcher])

return (<Form>
</Form >)
}