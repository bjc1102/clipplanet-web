import { atom } from 'recoil'

import ICard from '../types/Card'
import IForm from '../types/Form'

const defaultFormValue: IForm = {
  title: '',
  content: '',
  url: '',
}

const CardListState = atom<ICard[]>({
  key: 'cardListState', // unique ID (with respect to other atoms/selectors)
  default: [],
})

export { CardListState, defaultFormValue }