import React from 'react';

type ContainerProps = {
  className?: string;
  children: React.ReactNode;
  as?: React.ElementType;  
};

const Container = ({
  className = "",
  children,
  as: Tag = "section",
}: ContainerProps) => {
  return (
    <Tag className={`max-w-7xl mx-auto px-6 ${className}`}>
      {children}
    </Tag>
  );
};

export default Container;
