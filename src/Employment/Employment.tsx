import './Employment.css'

function EmploymentItem({
  employer,
}: {
  employer: string,
}) {
  return (
    <div className="employment__item">
      <p>{employer}</p>
    </div>
  )
}

function Employment() {
  return (
    <>
      <h3>Employment</h3>
      <EmploymentItem employer="Afterpay" />
      <EmploymentItem employer="Afterpay" />
    </>
  )

}

export default Employment
