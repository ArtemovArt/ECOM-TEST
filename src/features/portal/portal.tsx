import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { Modal } from '../../entities/modal/modal';
import { consts } from '../../shared/consts';

type PortalProps = { id: string };

export const Portal = (props: PortalProps) => {
  const { id } = props;
  const [container, setContainer] = useState<HTMLElement>();

  useEffect(() => {
    if (id) {
      const portalContainer = document.getElementById(id);

      if (!portalContainer) {
        throw new Error(consts.errors.portalError);
      }

      setContainer(portalContainer);
    }
  }, [id]);

  return container ? createPortal(<Modal />, container) : null;
};
