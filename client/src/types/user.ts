import type { Habit } from './habit'

export type User = {
    id: number
    email: string
    name: string
    habits: Habit[]
    createdAt: Date
}