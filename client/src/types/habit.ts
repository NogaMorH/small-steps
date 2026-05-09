import type { PracticeLog } from './practice-log'

export type Habit = {
    id: number
    userId: number
    name: string
    description: string
    targetSessionsPerWeek: number
    stats: {
        currentStreak: number
        weeklyProgress: number
    }
    recentLogs: PracticeLog[]
    createdAt: Date
}