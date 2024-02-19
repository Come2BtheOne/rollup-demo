import { HelloWorld } from '@/utils/foo.js'
import { version } from '../package.json'
// import { add } from 'lodash'
import { add } from 'lodash-es'
import '@/styles/common.scss'

export default () => {
  // import('@/utils/foo.js').then(({ HelloWorld }) => console.log(HelloWorld()))
  console.log(HelloWorld())
  console.log('版本号' + version)
  console.log('sum ' + add(2 + 4))
}
