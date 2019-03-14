import React from 'react';
import { Icon } from 'antd';

export default function Result({
  className,
  type,
  title,
  description,
  extra,
  actions,
  ...restProps
}) {
  const iconMap = {
    error: <Icon className='error' type="close-circle" theme="filled" />,
    success: <Icon className='success' type="check-circle" theme="filled" />,
  };

  return (
    <div className='result' {...restProps}>
      <div className='icon'>{iconMap[type]}</div>
      <div className='title'>{title}</div>
      {description && <div className='description'>{description}</div>}
      {extra && <div className='extra'>{extra}</div>}
      {actions && <div className='actions'>{actions}</div>}
    </div>
  );
}
