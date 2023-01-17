type Err = {
  code: number;
  message: string;
  more: {
    url: string;
    method: string;
    header?: Record<string, string>;
    content?: any;
  };
};

export default Err;
