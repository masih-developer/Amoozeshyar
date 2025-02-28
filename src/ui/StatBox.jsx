import { Link } from 'react-router-dom';
import Bullet from './Bullet';

const StatBox = ({
  children,
  title,
  bulletColor = '',
  details = false,
  detailsLink = '',
}) => {
  return (
    <div className="p-5 rounded-lg shadow-md bg-white h-full overflow-auto">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-x-2">
          <Bullet bulletColor={bulletColor} />
          <h2 className="font-medium">{title}</h2>
        </div>
        {details && (
          <Link
            to={details ? detailsLink : ''}
            className="text-gray-500 border-b border-b-gray-500"
          >
            جزئیات
          </Link>
        )}
      </div>
      {children}
    </div>
  );
};

export default StatBox;
