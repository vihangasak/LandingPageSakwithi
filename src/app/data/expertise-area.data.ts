import { ExpertiseAreaSchema } from "@data/schema/expertise-area.schema";
import { site, api, mobile, monitor, speed, search } from '@icon/regular.icon'


const expertiseAreaData: ExpertiseAreaSchema[] = [
  {
    icon: site,
    percent: '90%',
    name: 'Web Development'
  },
  {
    icon: api,
    percent: '90%',
    name: 'API Development'
  },
  {
    icon: mobile,
    percent: '90%',
    name: 'Windows Development'
  },
  {
    icon: monitor,
    percent: '60%',
    name: 'UX/UI Design'
  },
  {
    icon: speed,
    percent: '75%',
    name: 'SEO Optimization'
  },
  {
    icon: search,
    percent: '20%',
    name: 'Unit Testing'
  },
]

export default expertiseAreaData
