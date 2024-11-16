// src/components/layout/Footer.jsx
const Footer = () => {
    return (
      <footer className="bg-white dark:bg-gray-900 py-6">
        <div className="container mx-auto text-center">
          <p>© {new Date().getFullYear()} Sidhant Srivastava. All rights reserved.</p>
        </div>
      </footer>
    )
  }
  
  export default Footer