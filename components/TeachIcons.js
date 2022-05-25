import { Ireact, Iangular, Ijs, Inext, Iredux, Ihtml, Isass, Ichakra, Ipython, Iaws, Ifirebase, Imysql, Inode, Iredis, Iblender, Iadobe, Iunity, Ipostgress, Itailwind, Ibash, Ilinux, Ikubernetes, Inginx, Ivim, Inest, Igit } from '../components/icons'

const TeachIcons = ({ setIconName }) => {
  return (
    <>
      <Ireact
        onMouseOver={() => setIconName("React")}
        onMouseLeave={() => setIconName("")}
        boxSize={12} fill={'currentColor'} m={2} />
      <Inext
        onMouseOver={() => setIconName("Next.js")}
        onMouseLeave={() => setIconName("")}
        boxSize={12} fill={'currentColor'} m={2} />
      <Iangular boxSize={12} fill={'currentColor'} m={2}
        onMouseOver={() => setIconName("Angular")}
        onMouseLeave={() => setIconName("")}
      />
      <Iredux boxSize={12} fill={'currentColor'} m={2}
        onMouseOver={() => setIconName("Redux")}
        onMouseLeave={() => setIconName("")}
      />
      <Ijs boxSize={12} fill={'currentColor'} m={2}
        onMouseOver={() => setIconName("Javascript")}
        onMouseLeave={() => setIconName("")}
      />
      <Ihtml boxSize={12} fill={'currentColor'} m={2}
        onMouseOver={() => setIconName("Html5")}
        onMouseLeave={() => setIconName("")}
      />
      <Isass boxSize={12} fill={'currentColor'} m={2}
        onMouseOver={() => setIconName("Sass")}
        onMouseLeave={() => setIconName("")}
      />
      <Itailwind boxSize={12} fill={'currentColor'} m={2}
        onMouseOver={() => setIconName("Tailwind")}
        onMouseLeave={() => setIconName("")}
      />
      <Ichakra boxSize={12} fill={'currentColor'} m={2}
        onMouseOver={() => setIconName("Chakra-ui")}
        onMouseLeave={() => setIconName("")}
      />
      <Ipython boxSize={12} fill={'currentColor'} m={2}
        onMouseOver={() => setIconName("Python")}
        onMouseLeave={() => setIconName("")}
      />
      <Inginx boxSize={12} fill={'currentColor'} m={2}
        onMouseOver={() => setIconName("Nginx")}
        onMouseLeave={() => setIconName("")}
      />
      <Iaws boxSize={12} fill={'currentColor'} m={2}
        onMouseOver={() => setIconName("AWS")}
        onMouseLeave={() => setIconName("")}
      />
      <Ifirebase boxSize={12} fill={'currentColor'} m={2}
        onMouseOver={() => setIconName("Firebase")}
        onMouseLeave={() => setIconName("")}
      />
      <Imysql boxSize={12} fill={'currentColor'} m={2}
        onMouseOver={() => setIconName("MySQL")}
        onMouseLeave={() => setIconName("")}
      />
      <Ipostgress boxSize={12} fill={'currentColor'} m={2}
        onMouseOver={() => setIconName("Postgress")}
        onMouseLeave={() => setIconName("")}
      />
      <Iredis boxSize={12} fill={'currentColor'} m={2}
        onMouseOver={() => setIconName("Redis")}
        onMouseLeave={() => setIconName("")}
      />
      <Inode boxSize={12} fill={'currentColor'} m={2}
        onMouseOver={() => setIconName("Node")}
        onMouseLeave={() => setIconName("")}
      />
      <Inest boxSize={12} fill={'currentColor'} m={2}
        onMouseOver={() => setIconName("Nest.js")}
        onMouseLeave={() => setIconName("")}
      />
      <Iblender boxSize={12} fill={'currentColor'} m={2}
        onMouseOver={() => setIconName("Blender")}
        onMouseLeave={() => setIconName("")}
      />
      <Iunity boxSize={12} fill={'currentColor'} m={2}
        onMouseOver={() => setIconName("Unity")}
        onMouseLeave={() => setIconName("")}
      />
      <Ibash boxSize={12} fill={'currentColor'} m={2}
        onMouseOver={() => setIconName("Bash")}
        onMouseLeave={() => setIconName("")}
      />
      <Ilinux boxSize={12} fill={'#333'} m={2}
        onMouseOver={() => setIconName("Linux")}
        onMouseLeave={() => setIconName("")}
      />
      <Ikubernetes boxSize={12} fill={'currentColor'} m={2}
        onMouseOver={() => setIconName("Kubernetes")}
        onMouseLeave={() => setIconName("")}
      />
      <Igit boxSize={12} fill={'currentColor'} m={2}
        onMouseOver={() => setIconName("Git")}
        onMouseLeave={() => setIconName("")}
      />
    </>

  )
}

export default TeachIcons
