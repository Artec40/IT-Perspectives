import { useRouter } from 'next/router'

export default function Project() {
    const router = useRouter()
    return <div>project {router.query.id}</div>
}
