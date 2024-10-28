
import { InitialsLinks } from "./InitialsLinks"
import { Service } from "./Service"
import { Contacts } from "./Contacts"
import { SocialMedia } from "./SocialMedia"

export function Footer() {
  return (
    <footer className="bg-blue-1000 w-full bottom-0 left-0 right-0 font-sans flex flex-col gap-8 py-8">
      <h2 className="text-center text-white text-3xl py-5">Interessado? Entre em <strong className="text-yellow-350">contato</strong></h2>

      <section className="flex justify-center items-center gap-14">
        <SocialMedia />

        <div className="text-white text-lg flex items gap-24">
          <InitialsLinks />
          <Service />
          <Contacts />
        </div>
      </section>

      <span className="h-0.5 w-full bg-blue-925" />
      <p className="text-center text-white">Site desenvolvido por <a href="#" className="text-yellow-350 font-semibold">Alunos</a></p>
    </footer>
  )
}