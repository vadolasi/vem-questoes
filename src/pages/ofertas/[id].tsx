import { loadMercadoPago } from "@mercadopago/sdk-js"
import { useEffect, useRef } from "react"

export default () => {
  const mp = useRef<any>(undefined)

  useEffect(() => {
    loadMercadoPago()
      .then(() => mp.current = new (window as any).MercadoPago(process.env.NEXT_PUBLIC_MERCADO_PAGO_PUBLIC_KEY!))
  }, [])

  return (
    <>

    </>
  )
}
