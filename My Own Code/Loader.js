import React from "react";
import { Spin } from 'antd';
import { useSelector } from "react-redux";

export default function Loader() {
    const loader = useSelector((state) => state.loader.status);
    return (
        <React.Fragment>
            {loader &&
                (
                    <div
                        style={{
                            position: "fixed",
                            top: "0",
                            left: "0",
                            right: "0",
                            bottom: "0",
                            height: "100%",
                            width: "100%",
                            backgroundColor: "#ffffff",
                            opacity: 0.6,
                            zIndex: 3000
                        }}
                    >
                        <div
                            style={{
                                position: "absolute",
                                textAlign: "center",
                                top: "47%",
                                left: "47%",
                                zIndex: 1001
                            }}
                        >
                            <Spin size="large" tip="Loading..." />
                        </div>
                    </div>
                )
            }
        </React.Fragment>
    );
}
