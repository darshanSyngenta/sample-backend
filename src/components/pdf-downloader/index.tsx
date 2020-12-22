import React, { ReactNode } from 'react';
import Pdf from 'react-to-pdf';

interface IGeneratePDFProps {
  refName: ReactNode;
  fileName: string;
}
const GeneratePDF: React.FC<IGeneratePDFProps> = (props: any) => {
  const cloneItem = (fn) => {
    return React.cloneElement(props.children, { onClick: () => fn() });
  };
  return (
    <Pdf targetRef={props.refName} filename={props.fileName} x={10} y={10}>
      {({ toPdf }) => cloneItem(toPdf)}
    </Pdf>
  );
};
export default GeneratePDF;
