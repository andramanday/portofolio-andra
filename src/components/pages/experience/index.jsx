  
import { getExperience } from '../../../redux/action/experienceAction'
import { connect } from 'react-redux'
import experience from './Experience'
const mapStoreToProps = state => ({
  experiences: state.experience.experiences,
  loading:state.experience.loading
})
const mapDispatchToProps = dispatch => ({
  getExperience: ()=>dispatch(getExperience()),
})

export default connect(mapStoreToProps, mapDispatchToProps)(experience)