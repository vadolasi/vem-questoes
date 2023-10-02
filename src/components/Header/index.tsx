import React, { useEffect, useState } from "react"
import Image from "next/image"
import {
  AiOutlineDownCircle,
  AiOutlineUser,
  AiOutlinePoweroff,
  AiOutlineBell
} from "react-icons/ai"
import Logo from "../../assets/logo.png"
import Link from "next/link"
import { graphql } from "@/gql"
import { useMutation, useQuery } from "urql"

const meQuery = graphql(/* GraphQL */ `
  query Me {
    me {
      name
      photoUrl
    }
    notifications {
      id
      title
      body
    }
  }
`);

const logoutMutation = graphql(/* GraphQL */ `
  mutation Logout {
    logout
  }
`);

const readNotificationMutation = graphql(/* GraphQL */ `
  mutation ReadNotification($id: String!) {
    readNotifications(notificationIds: [$id])
  }
`)

type HeaderProps = {
  invisible?: boolean
}

export const Header = ({ invisible = false }: HeaderProps) => {
  const [result, reloadNotifications] = useQuery({ query: meQuery })
  const [, execute] = useMutation(logoutMutation)
  const [, executeReadNotification] = useMutation(readNotificationMutation)

  const { data, fetching: fetching2 } = result
  const fetching = fetching2 && !data

  useEffect(() => {
    const timer = setInterval(() => {
      reloadNotifications({ requestPolicy: "network-only" })
    }, 10000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="sticky top-0 z-40 w-full h-20 border-b navbar bg-base-100 lg:pr-10">
      <div className="navbar-start">
        <div className="flex-none lg:hidden">
          <label htmlFor="my-drawer-2" className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        <div className="flex-1 hidden px-2 mx-2 md:block">
          <Link href="/">
            <Image
              src={Logo}
              alt="Logo escrito 'Vem questões'"
              height={50}
              className="Logo"
            />
          </Link>
        </div>
      </div>
      <div className="navbar-end">
        <details className="dropdown dropdown-end lg:mr-4">
          <summary className="rounded-full btn btn-ghost h-10 w-12">
          <div className="indicator">
            {(data?.notifications?.length || 0) > 0 && (
              <span className="indicator-item badge badge-error h-5 w-5 flex items-center justify-center rounded-full border-0 text-white">{data?.notifications?.length}</span>
            )}
            <AiOutlineBell size={24} />
          </div>
          </summary>
          <ul
            tabIndex={0}
            className="p-4 w-96 max-h-52 dropdown-content mt-3 z-[1] shadow bg-base-100 rounded-box overflow-scroll"
          >
            {data?.notifications.length === 0 && (
              <div className="flex items-center justify-center w-full">
                <p className="text-base font-bold text-center">
                  Nenhuma notificação disponível!
                </p>
              </div>
            )}
            {data?.notifications.map((notification) => (
              <React.Fragment key={notification.id}>
                <li>
                  <p className="text-base font-bold">{notification.title}</p>
                  <p className="text-sm">{notification.body}</p>
                  <button
                    className="font-bold duration-200 hover:text-primary"
                    onClick={() => {
                      executeReadNotification({ id: notification.id })
                        .then(data => {
                          if (data.data?.readNotifications) {
                            reloadNotifications({ requestPolicy: "network-only" })
                          }
                        })
                    }}
                  >
                    Marcar como lida
                  </button>
                </li>
                <div className="w-full h-[1px] bg-base-200 mt-3 mb-3" />
              </React.Fragment>
            ))}
          </ul>
        </details>

        <details className="dropdown dropdown-end">
          <summary
            tabIndex={0}
            className="flex items-center justify-between h-12 p-1 bg-gray-100 border rounded-full cursor-pointer hover:opacity-70"
          >
            <div className="h-full avatar">
              <div className="flex items-center justify-center w-full h-full bg-white rounded-full">
                {!fetching && (
                  <Image
                    src={data?.me?.photoUrl!}
                    width={20}
                    height={20}
                    alt="Foto de perfil do usuário"
                  />
                )}
              </div>
            </div>
            <span className="w-full m-2 font-bold text-center">
              {fetching ? "Carregando..." : data?.me?.name}
            </span>
            <AiOutlineDownCircle size={38} className="mr-4" />
          </summary>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li className="font-bold">
              <Link href="/perfil">
                <AiOutlineUser size={20} />
                Perfil
              </Link>
            </li>
            <li className="font-bold">
              <Link href="/ofertas">
                <AiOutlineUser size={20} />
                Planos
              </Link>
            </li>
            <li className="font-bold">
              <Link href="/login" onClick={() => execute({})}>
                <AiOutlinePoweroff size={20} />
                Sair
              </Link>
            </li>
          </ul>
        </details>
      </div>
    </div>
  );
};
