import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { HiCamera } from "react-icons/hi";
import pic from "../../../assets/images/126.png";
import { EasyCropper } from "./EasyCropper";

const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
};

const thumb = {
  display: "inline-flex",
  borderRadius: "50%",
  border: "1px solid #2b5997",
  marginBottom: 8,
  marginRight: 8,
  width: 120,
  height: 120,
  padding: 4,
  boxSizing: "border-box",
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

const img = {
  display: "block",
  width: "auto",
  height: "100%",
  borderRadius: "50%",
};

export default function Previews(props) {
  const [files, setFiles] = useState([]);
  const [base64Decode, setBase64Decode] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles) => {
      convertToBase64(acceptedFiles[0]);
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const convertToBase64 = (file) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
    promise.then(
      (result) => {
        setBase64Decode(result);
      },
      (err) => {
        console.log(err);
      }
    );
  };

  const thumbs = files.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={base64Decode}
          style={img}
          alt=""
          // Revoke data uri after image is loaded
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
        />
      </div>
    </div>
  ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <>
      <section className="relative container mt-8">
        {/* Start */}
        {base64Decode.length === 0 ? (
          <aside style={thumbsContainer}>
            <div style={thumb}>
              <div style={thumbInner}>
                <img src={pic} style={img} alt="" />
              </div>
            </div>
          </aside>
        ) : null}
        {/* End */}
        <div {...getRootProps({ className: "dropzone" })}>
          <input {...getInputProps()} />
          <div className="absolute right-52 sm:right-64 top-20 flex justify-center items-center w-9 h-9 bg-[#2b5997] rounded-full shadow cursor-pointer">
            <HiCamera className="w-5 h-5 text-white" />
          </div>
        </div>
        <aside style={thumbsContainer}>{thumbs}</aside>
      </section>
      <div className="relative w-full h-60 border border-red-500 overflow-hidden">
        <EasyCropper
          image={base64Decode}
          returnImage={(e) => setBase64Decode(e)}
          className="absolute"
        />
      </div>
    </>
  );
}
