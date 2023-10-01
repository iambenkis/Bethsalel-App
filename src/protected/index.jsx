import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'

const Protected = ({ children }) => {
  const navigate = useNavigate()
  const state = useSelector((state) => state.login)
  useEffect(() => {
    const token = localStorage.getItem('bet_token')
      ? localStorage.getItem('bet_token')
      : ''
    if (!state.isAuthenticated && token === '') {
      navigate('/login')
    }
  }, [state.isAuthenticated])

  return children
}

Protected.propTypes = {
  children: PropTypes.element.isRequired,
}
export default Protected
