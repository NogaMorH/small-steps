import { useEffect, useState } from 'react'
import { userService } from '../../services/userService'
import type { User } from '../../types/user'

export function HomePage() {
    const [user, setUser] = useState<User | null>(null)

    useEffect(() => {
        loadUser()
    }, [])

    function loadUser() {
        setUser(userService.getUser())
    }

    return (
        <div>Hello {user ? user.name : 'stranger'}</div>
    )
}