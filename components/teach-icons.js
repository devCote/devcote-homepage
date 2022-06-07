import { Ireact, Iangular, Ijs, Inext, Iredux, Ihtml, Isass, Ichakra, Ipython, Iaws, Ifirebase, Imysql, Inode, Iredis, Iblender, Iunity, Ipostgress, Itailwind, Ibash, Ilinux, Ikubernetes, Inginx, Inest, Igit } from '../components/icons'

const TeachIcons = ({ setIconName, color }) => {
  return (
    <>
      <Ireact
        _hover={{ color }}
        onMouseOver={() => setIconName("React")}
        onMouseLeave={() => setIconName("")}
        boxSize={12} fill={'currentColor'} m={2} />
      <Inext
        _hover={{ color }}
        onMouseOver={() => setIconName("Next.js")}
        onMouseLeave={() => setIconName("")}
        boxSize={12} fill={'currentColor'} m={2} />
      <Iangular
        _hover={{ color }}
        boxSize={12} fill={'currentColor'} m={2}
        onMouseOver={() => setIconName("Angular")}
        onMouseLeave={() => setIconName("")}
      />
      <Iredux
        _hover={{ color }}
        boxSize={12} fill={'currentColor'} m={2}
        onMouseOver={() => setIconName("Redux")}
        onMouseLeave={() => setIconName("")}
      />
      <Ijs
        _hover={{ color }}
        boxSize={12} fill={'currentColor'} m={2}
        onMouseOver={() => setIconName("Javascript")}
        onMouseLeave={() => setIconName("")}
      />
      <Ihtml
        _hover={{ color }}
        boxSize={12} fill={'currentColor'} m={2}
        onMouseOver={() => setIconName("Html5")}
        onMouseLeave={() => setIconName("")}
      />
      <Isass
        _hover={{ color }}
        boxSize={12} fill={'currentColor'} m={2}
        onMouseOver={() => setIconName("Sass")}
        onMouseLeave={() => setIconName("")}
      />
      <Itailwind
        _hover={{ color }}
        boxSize={12} fill={'currentColor'} m={2}
        onMouseOver={() => setIconName("Tailwind")}
        onMouseLeave={() => setIconName("")}
      />
      <Ichakra
        _hover={{ color }}
        boxSize={12} fill={'currentColor'} m={2}
        onMouseOver={() => setIconName("Chakra-ui")}
        onMouseLeave={() => setIconName("")}
      />
      <Ipython
        _hover={{ color }}
        boxSize={12} fill={'currentColor'} m={2}
        onMouseOver={() => setIconName("Python")}
        onMouseLeave={() => setIconName("")}
      />
      <Inginx
        _hover={{ color }}
        boxSize={12} fill={'currentColor'} m={2}
        onMouseOver={() => setIconName("Nginx")}
        onMouseLeave={() => setIconName("")}
      />
      <Iaws
        _hover={{ color }}
        boxSize={12} fill={'currentColor'} m={2}
        onMouseOver={() => setIconName("AWS")}
        onMouseLeave={() => setIconName("")}
      />
      <Ifirebase
        _hover={{ color }}
        boxSize={12} fill={'currentColor'} m={2}
        onMouseOver={() => setIconName("Firebase")}
        onMouseLeave={() => setIconName("")}
      />
      <Imysql
        _hover={{ color }}
        boxSize={12} fill={'currentColor'} m={2}
        onMouseOver={() => setIconName("MySQL")}
        onMouseLeave={() => setIconName("")}
      />
      <Ipostgress
        _hover={{ color }}
        boxSize={12} fill={'currentColor'} m={2}
        onMouseOver={() => setIconName("Postgress")}
        onMouseLeave={() => setIconName("")}
      />
      <Iredis
        _hover={{ color }}
        boxSize={12} fill={'currentColor'} m={2}
        onMouseOver={() => setIconName("Redis")}
        onMouseLeave={() => setIconName("")}
      />
      <Inode
        _hover={{ color }}
        boxSize={12} fill={'currentColor'} m={2}
        onMouseOver={() => setIconName("Node")}
        onMouseLeave={() => setIconName("")}
      />
      <Inest
        _hover={{ color }}
        boxSize={12} fill={'currentColor'} m={2}
        onMouseOver={() => setIconName("Nest.js")}
        onMouseLeave={() => setIconName("")}
      />
      <Iblender
        _hover={{ color }}
        boxSize={12} fill={'currentColor'} m={2}
        onMouseOver={() => setIconName("Blender")}
        onMouseLeave={() => setIconName("")}
      />
      <Iunity
        _hover={{ color }}
        boxSize={12} fill={'currentColor'} m={2}
        onMouseOver={() => setIconName("Unity")}
        onMouseLeave={() => setIconName("")}
      />
      <Ibash
        _hover={{ color }}
        boxSize={12} fill={'currentColor'} m={2}
        onMouseOver={() => setIconName("Bash")}
        onMouseLeave={() => setIconName("")}
      />
      <Ilinux
        _hover={{ color }}
        boxSize={12} fill={'#333'} m={2}
        onMouseOver={() => setIconName("Linux")}
        onMouseLeave={() => setIconName("")}
      />
      <Ikubernetes
        _hover={{ color }}
        boxSize={12} fill={'currentColor'} m={2}
        onMouseOver={() => setIconName("Kubernetes")}
        onMouseLeave={() => setIconName("")}
      />
      <Igit
        _hover={{ color }}
        boxSize={12} fill={'currentColor'} m={2}
        onMouseOver={() => setIconName("Git")}
        onMouseLeave={() => setIconName("")}
      />
    </>

  )
}

export default TeachIcons
