import { message, Upload } from 'antd';
import React, { useState } from 'react';

interface IfileUploader {
  translate: (str: string) => string;
  addFileName: (file: any) => void;
  loader: (bool: boolean) => void;
  fileName: string;
  showUploadList?: boolean;
  multiple?: boolean;
  sendSignedURLKey?: (data: any) => void;
}

const FileUploader = (props: IfileUploader) => {
  const [headers, setHeaders] = useState<any>();
  const [signedUrls, setSignedUrls] = useState<any>({});
  const [noError, setNoError] = useState<boolean>(false);

  const getPresignedPostData = (selectedFile) => {
    return new Promise((resolve) => {
      // Set the proper URL here.
      const url = 'https://2fl7k2zl0i.execute-api.eu-central-1.amazonaws.com/dev/get-presigned-url';
      fetch(url, {
        method: 'post',
        body: JSON.stringify({
          name: selectedFile.name,
          type: selectedFile.type,
        }),
      }).then((response) => {
        if (response.status === 200) {
          resolve(response.json());
        } else {
          message.error(props.translate('Please check your internet connection'));
        }
      });
    });
  };
  const handleBeforeUpload = async (file): Promise<void> => {
    const isValidType =
      file.type === 'image/jpeg' ||
      file.type === 'image/png' ||
      file.type === 'application/pdf' ||
      file.type === 'application/vnd.ms-excel' ||
      file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
    if (!isValidType) {
      message.error('You can only upload PDF, XSLS OR IMAGE file!');
      return;
    }
    const isLt5M = file.size / 1024 / 1024 < 5;
    if (!isLt5M) {
      message.error('Document must smaller than 5MB!');
      return;
    }
    if (isValidType && isLt5M) {
      setNoError(true);
      // Headers are required by Amazon S3
      setHeaders({
        'x-amz-acl': 'public-read',
        'Content-Type': file.type,
      });
      // Fetches the Signed URL from S3 bucket
      // Prepend with the ID to make the file name unique
      const signedUrl: any = await getPresignedPostData({
        name: file.name,
        type: file.type,
      });
      setSignedUrls({ ...signedUrl });
      props.addFileName(file);
     
    }
  };
  const handleUpload = ({ onSuccess, onError, file }: any) => {
    if (noError) {

      props.loader(true);
      const presignedPostData = signedUrls.data;
      props.sendSignedURLKey && presignedPostData?.fields && props.sendSignedURLKey(presignedPostData.fields.key);
      const formData = new FormData();
      Object.keys(presignedPostData.fields).forEach((key) => {
        formData.append(key, presignedPostData.fields[key]);
      });
      // S3 requires PUT method!
      formData.append('file', file);
      fetch(presignedPostData.url, {
        method: 'POST',
        body: formData,
      }).then((response) => {
        if (response.status === 204) {
          onSuccess(null, file);
          props.loader(false);
        } else {
          onError(response.statusText, JSON.stringify(response), file);
          props.loader(false);
        }
      });
    }
  };
  return (
    <Upload
      name="avatar"
      listType="picture-card"
      className="avatar-uploader signup-statisitcal-form"
      headers={headers}
      action={signedUrls.length > 0 ? signedUrls[0] : ''}
      beforeUpload={(args) => handleBeforeUpload(args)}
      customRequest={(e) => handleUpload(e)}
      showUploadList={props.showUploadList ? props.showUploadList : false}
      multiple={props.multiple ? props.multiple : false}
    >
      {props.fileName !== '' ? (
        <p>{props.fileName}</p>
      ) : (
        <p>
          {props.translate('Drag and drop files here or')}
          <a> {props.translate('Choose Files')} </a>{' '}
        </p>
      )}
    </Upload>
  );
};
export default FileUploader;
