import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const SkillBadge = ({
  name,
  level = 3,
  icon,
  className = '',
}) => {
  let colorClass = '';
  switch (level) {
    case 1:
      colorClass = 'from-gray-700 to-gray-600 border-gray-500';
      break;
    case 2:
      colorClass = 'from-cyber-neon-secondary/30 to-cyber-neon-secondary/20 border-cyber-neon-secondary';
      break;
    case 3:
      colorClass = 'from-cyber-neon-accent/30 to-cyber-neon-accent/20 border-cyber-neon-accent';
      break;
    case 4:
      colorClass = 'from-cyber-neon-primary/30 to-cyber-neon-highlight/30 border-cyber-neon-primary';
      break;
    case 5:
      colorClass = 'from-cyber-neon-primary/40 to-cyber-neon-secondary/40 border-cyber-neon-primary';
      break;
    default:
      colorClass = 'from-gray-800 to-gray-700 border-gray-600';
  }

  const indicators = [];
  for (let i = 1; i <= 5; i++) {
    indicators.push(
      <motion.div 
        key={i}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: i * 0.1 }}
        className={`h-1 w-2 rounded-full ${i <= level ? 'bg-cyber-neon-primary' : 'bg-gray-600'}`}
      />
    );
  }

  return (
    <motion.div 
      className={`
        inline-flex items-center px-3 py-1 rounded-md
        bg-gradient-to-r ${colorClass}
        border border-opacity-40
        shadow-lg hover:shadow-cyber-neon-primary/10
        ${className}
      `}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon && (
        <motion.span 
          className="mr-2"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          {icon}
        </motion.span>
      )}
      <span className="font-medium text-sm">{name}</span>
      <div className="ml-2 flex space-x-1">
        {indicators}
      </div>
    </motion.div>
  );
};

SkillBadge.propTypes = {
  name: PropTypes.string.isRequired,
  level: PropTypes.number,
  icon: PropTypes.element,
  className: PropTypes.string,
};

export default SkillBadge;
