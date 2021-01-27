import React, { useState} from 'react'

const Formulario = ({ createOrder }) => {
    
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: ''
    })

    const getContactData = (e) => {
        const { name, value } = e.target
        setForm((state) => {
            return { ...state, [name]: value }
        })
        console.log(form)
    }

    const finalizePurchase = () => {
        const { name, email, phone } = form
        createOrder({ name, email, phone })
    }

    return (
        <>
            <h2>Datos de Contacto</h2>
              <form onSubmit={finalizePurchase}>
                  <div>
                      <input placeholder="Nombre y Apellido" name="name" value={form.name} onChange={getContactData} type="text"/>
                  </div>
                  <div>
                      <input placeholder="Correo Electrónico" name="email" value={form.email} onChange={getContactData} type="email"/>
                  </div>
                  <div>
                      <input placeholder="Teléfono" name="phone" value={form.phone} onChange={getContactData} type="text"/>
                  </div>
                  <button type="submit"  /* disabled={form.name.length && form.email.length && form.phone.length > 0} */>Finalizar</button>
              </form>
            
        </>
    )
}
export default Formulario