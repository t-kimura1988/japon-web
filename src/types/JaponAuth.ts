import {User} from 'firebase/auth'
import { type } from 'os'
import { JaponUser } from './JaponUser'

export type JaponAuth = {
    firebaseUser: User | undefined | null,
    japonUser: JaponUser | null,
    isLoading: Boolean
}