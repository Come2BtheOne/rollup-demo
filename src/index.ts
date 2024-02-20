import { HelloWorld } from '@/utils/foo'
//@ts-ignore
import { version } from '../package.json'
// import { add } from 'lodash'
//@ts-ignore
import { add } from 'lodash-es'
import './styles/common.scss'

export default () => {
  // import('@/utils/foo.js').then(({ HelloWorld }) => console.log(HelloWorld()))
  console.log(HelloWorld())
  console.warn('版本号' + version)
  const num = add(2 + 4)
  console.log('sum ' + num)
}
