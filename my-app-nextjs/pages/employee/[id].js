import { useRouter } from 'next/router'

export default function Employee() {
    const router = useRouter()
    return <div>employee {router.query.id}</div>
}
