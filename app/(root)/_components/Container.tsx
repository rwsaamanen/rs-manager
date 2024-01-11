type Props = {
  children?: React.ReactNode
}

const Container = ({ children }: Props) => {
  return <div className="container mx-auto px-5 md:px-12 max-w-7xl">{children}</div>
}

export default Container
