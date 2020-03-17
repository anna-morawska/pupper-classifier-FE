import React, { FC, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useDropzone } from "react-dropzone";

import DoggoImage from "../../assets/doggos.jpeg";
import { fetchData } from "../../store/actions/data";
import styles from "./Polaroid.module.scss";

interface IFile {
  preview: string;
}

const Polaroid: FC = () => {
  const [files, setFiles] = useState<IFile[]>([]);
  const dispatch = useDispatch();

  const { getRootProps, getInputProps } = useDropzone({
    multiple: false,
    maxSize: 3 * 1024 * 1024,
    accept: "image/jpeg",
    onDrop: acceptedFiles => {
      setFiles(
        acceptedFiles.map(file =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
          })
        )
      );
    }
  });

  useEffect(() => {
    if (files[0]) {
      dispatch(fetchData());
    }
  }, [files, dispatch]);

  useEffect(
    () => () => {
      files.forEach(file => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  return (
    <figure className={styles.polaroid}>
      <picture {...getRootProps({ className: styles.dropzone })}>
        <input {...getInputProps()} />
        <img
          alt="uploaded doggo"
          className={styles.preview}
          src={files[0] && files[0].preview ? files[0].preview : DoggoImage}
        />
      </picture>
      <figcaption>
        Drag 'n' drop some files here, or click to select files
      </figcaption>
    </figure>
  );
};

export { Polaroid };
