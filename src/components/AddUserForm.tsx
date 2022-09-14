import React, { useState } from 'react'

type AddUserFormType = {
  adSoyad: string
  bakiye: string
}
const AddUserForm: any = (props: any) => {
  const [form, setForm] = useState<AddUserFormType>({
    adSoyad: '',
    bakiye: '',
  })
  const handleChange = (event: any) => {
    const key = event.currentTarget.name
    const value = event.currentTarget.value
    const newForm = { ...form, [key]: value }
    setForm(newForm)
  }
  return (
    <form className="addUserForm__form" id="addUserForm">
      <input
        onChange={handleChange}
        value={form.adSoyad}
        name="adSoyad"
        type="text"
        placeholder="Ad Soyad"
      />
      <input
        onChange={handleChange}
        value={form.bakiye}
        name="bakiye"
        type="text"
        placeholder="Bakiye"
      />
      <button
        type="button"
        onClick={() => {
          props.onAddUser(form)
          setForm({ adSoyad: '', bakiye: '' })
        }}
      >
        Ekle
      </button>
    </form>
  )
}

export default AddUserForm
