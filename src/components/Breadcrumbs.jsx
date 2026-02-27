import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumbs = () => {
    const location = useLocation();
    
    const getBreadcrumbs = () => {
        const pathnames = location.pathname.split('/').filter(x => x);
        const breadcrumbs = [
            { name: 'Home', path: '/', icon: <Home size={14} /> }
        ];

        const routeMap = {
            'about': { name: 'About', path: '/about' },
            'services': { name: 'Services', path: '/services' },
            'gallery': { name: 'Gallery', path: '/gallery' },
            'contact': { name: 'Contact', path: '/contact' },
            'privacy-policy': { name: 'Privacy Policy', path: '/privacy-policy' },
            'terms-of-service': { name: 'Terms of Service', path: '/terms-of-service' }
        };

        pathnames.forEach((path, index) => {
            if (routeMap[path]) {
                breadcrumbs.push(routeMap[path]);
            }
        });

        return breadcrumbs;
    };

    const breadcrumbs = getBreadcrumbs();

    if (breadcrumbs.length <= 1) {
        return null; // Don't show breadcrumbs on home page
    }

    return (
        <nav className="bg-gray-50 border-b border-gray-200" aria-label="Breadcrumb navigation">
            <div className="container py-3">
                <ol className="flex items-center space-x-2 text-sm">
                    {breadcrumbs.map((breadcrumb, index) => {
                        const isLast = index === breadcrumbs.length - 1;
                        
                        return (
                            <li key={breadcrumb.path} className="flex items-center">
                                {index > 0 && (
                                    <ChevronRight size={14} className="text-gray-400 mx-2" />
                                )}
                                
                                {isLast ? (
                                    <span className="text-gray-900 font-medium flex items-center">
                                        {breadcrumb.icon && (
                                            <span className="mr-1">{breadcrumb.icon}</span>
                                        )}
                                        {breadcrumb.name}
                                    </span>
                                ) : (
                                    <Link 
                                        to={breadcrumb.path}
                                        className="text-primary-600 hover:text-primary-800 transition-colors flex items-center"
                                    >
                                        {breadcrumb.icon && (
                                            <span className="mr-1">{breadcrumb.icon}</span>
                                        )}
                                        {breadcrumb.name}
                                    </Link>
                                )}
                            </li>
                        );
                    })}
                </ol>
            </div>
        </nav>
    );
};

export default Breadcrumbs;
