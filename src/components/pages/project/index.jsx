import { getProject } from '../../../redux/action/projectAction'
import { connect } from 'react-redux'
import project from './project'
const mapStoreToProps = state => ({
  projects: state.project.projects,
  loading:state.project.loading
})
const mapDispatchToProps = dispatch => ({
  getProject: ()=>dispatch(getProject()),
})

export default connect(mapStoreToProps, mapDispatchToProps)(project)