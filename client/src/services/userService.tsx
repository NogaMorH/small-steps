import type { User } from '../types/user'

export const userService = {
    getUser
}

export function getUser(): User {
    return {
        id: 1,
        email: 'noga@example.com',
        name: 'Noga',
        createdAt: new Date('2026-05-08'),
        habits: [
            {
                id: 1,
                userId: 1,
                name: 'Piano Practice',
                description: 'Practice piano consistently and improve sight reading',
                targetSessionsPerWeek: 5,
                stats: {
                    currentStreak: 2,
                    weeklyProgress: 3,
                },
                createdAt: new Date('2026-05-08'),
                recentLogs: [
                    {
                        id: 1,
                        habitId: 1,
                        practiceDate: new Date('2026-05-08'),
                        durationMinutes: 40,
                        mood: 'good',
                        summary: 'Practiced chord transitions and timing exercises.',
                        reflection: 'Felt more comfortable with transitions today.',
                        createdAt: new Date('2026-05-08')
                    }
                ]
            }
        ]
    }
}