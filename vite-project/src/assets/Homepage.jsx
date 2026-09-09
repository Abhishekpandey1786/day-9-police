import React from 'react'
import { Link } from 'react-router-dom'

function Homepage() {
  return (
    <div>
        <Link to="/privacy-policy" className="text-blue-500 hover:underline">
           Privacy Policy
        </Link>
        <br />
        <Link to="/terms-of-service" className="text-blue-500 hover:underline">
           Terms of Service
        </Link>
        <br />
        <Link to="/delete-account" className="text-blue-500 hover:underline">
           Delete Account
        </Link>
    </div>
  )
}
export default Homepage