import { CalendarStep } from './CalendarStep'
import { ConfirmStep } from './ConfirmStep'

export function ScheduleForm() {
  return (
    <>
      {false && <ConfirmStep />}
      {true && <CalendarStep />}
    </>
  )
}
