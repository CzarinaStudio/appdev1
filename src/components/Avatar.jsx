import React from 'react';
import { getImageUrl } from '../utils/utils.js';

export function Avatar({ person, size = 64 }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person, 's')}
      alt={person?.name ?? 'person'}
      width={size}
      height={size}
    />
  );
}
