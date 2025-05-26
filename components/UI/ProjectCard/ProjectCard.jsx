import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Lock } from 'lucide-react';
import PropTypes from 'prop-types';

const ProjectCard = ({
  title,
  description,
  tags = [], // <-- Set a default empty array
  imageUrl,
  githubUrl,
  demoUrl,
  isPrivate = false,
  className = '',
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardVariants = {
    initial: { scale: 0.95, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 0.3 }
    },
    hover: { 
      scale: 1.02,
      transition: { duration: 0.2 }
    }
  };

  const imageVariants = {
    hover: { 
      scale: 1.05,
      filter: "grayscale(0%)",
      transition: { duration: 0.3 }
    }
  };

  const tagVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.div 
      className={`
        relative overflow-hidden rounded-lg border border-cyber-neon-primary/20
        bg-cyber-dark/80 backdrop-blur-sm
        ${className}
      `}
      variants={cardVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {imageUrl && (
        <div className="relative h-48 overflow-hidden">
          <motion.div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${imageUrl})` }}
            variants={imageVariants}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark via-transparent to-transparent" />
          {isHovered && (
            <motion.div 
              className="absolute inset-0 bg-cyber-neon-primary/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              transition={{ duration: 0.2 }}
            />
          )}
        </div>
      )}
      
      <div className="p-5">
        <div className="flex justify-between items-start">
          <motion.h3 
            className="text-xl font-bold text-white mb-2 font-mono"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {isPrivate && <Lock className="inline-block h-4 w-4 mr-1 text-cyber-neon-accent" />}
            {title}
          </motion.h3>

          <div className="flex space-x-2">
            {githubUrl && !isPrivate && (
              <motion.a 
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyber-neon-primary transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="h-5 w-5" />
              </motion.a>
            )}
            {demoUrl && (
              <motion.a 
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyber-neon-secondary transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="h-5 w-5" />
              </motion.a>
            )}
          </div>
        </div>

        <motion.p 
          className="text-gray-400 mb-4 mt-2"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          {description}
        </motion.p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <motion.span 
              key={index}
              className="text-xs px-2 py-1 rounded-full bg-cyber-gray text-cyber-neon-primary border border-cyber-neon-primary/30"
              variants={tagVariants}
              initial="initial"
              animate="animate"
              transition={{ delay: index * 0.1 }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>

      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyber-neon-primary"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

// ✅ PropTypes for validation
ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  imageUrl: PropTypes.string,
  githubUrl: PropTypes.string,
  demoUrl: PropTypes.string,
  isPrivate: PropTypes.bool,
  className: PropTypes.string,
};

export default ProjectCard;
