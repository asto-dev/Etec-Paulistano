import etecLogo from "/etec-logo.webp"
import facebookIcon from "/facebook-icon.png"
import instagramIcon from "/instagram-icon.png"

export function SocialMedia() {
  return(
    <div className="flex flex-col items-center">
      <img src={etecLogo} alt="Etec logo" />

      <div className="flex justify-center gap-5 w-32">
        <a href="https://www.facebook.com/EtecPaulistano/">
          <img className="w-8 h-8" src={facebookIcon} alt="Facebook icon" />
        </a>

        <a href="https://www.instagram.com/etecpaulistano">
          <img className="w-8 h-8" src={instagramIcon} alt="Instagram icon" />
        </a>
      </div>
    </div>
  )
}