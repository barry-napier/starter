interface IndexProps {
  name: string
}

export default function Index({ name }: IndexProps): JSX.Element {
  return <div className="bg-red-500">Hello {name}</div>
}

export async function getStaticProps() {
  return {
    props: {
      name: 'Next.js',
    },
  }
}
