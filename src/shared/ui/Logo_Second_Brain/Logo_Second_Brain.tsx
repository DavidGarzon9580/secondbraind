import Link from 'next/link';
import Image from 'next/image';
import logoIcon from '@/../public/images/Logo.png'; 

export default function Logo() {
  return (
    <Link 
      href="/" 
      className="
        flex         // display: flex;
        items-center // align-items: center;
        gap-4        // gap: 1rem; (1rem = 4 unidades en la escala de Tailwind)
        z-[1002]     // z-index: 1002; (usando un valor arbitrario)
      "
    >
      <Image
        src={logoIcon}
        alt="Logo Icon"
        width={48} // 3rem = 48px
        height={48}
        className="
          h-auto       // height: auto;
          w-12         // width: 3rem; (3rem = 12 unidades en la escala de Tailwind)
          drop-shadow-[2px_2px_4px_rgba(0,0,0,0.4)] // filter: drop-shadow(...); (valor arbitrario)
          transition-transform duration-300 ease-in-out // transition: transform...
          hover:scale-105 // &:hover { transform: scale(1.05); }
        "
      />
      <span 
        className="
          text-sm      // font-size: 0.9rem; (text-sm es 0.875rem, muy cercano y estándar)
          font-semibold
          uppercase    // text-transform: uppercase;
          transition-colors duration-300 ease-in-out // transition: color...
          text-gray-800 // Color de texto por defecto (ejemplo)
          hover:text-hover-color // &:hover { color: var(--hover-color); } (ver abajo cómo configurar esto)
        "
      >
        Second Brain
      </span>
    </Link>
  );
}