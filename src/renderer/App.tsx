import { HashRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Err404 from '@/renderer/pages/Err404';
import Arch from './pages/Arch';

import Sidebar from './components/base/Sidebar';

import FileRename from './pages/FileRename';

const App: React.FunctionComponent = () => (
  // eslint-disable-next-line react/jsx-no-useless-fragment
  <>
    <HashRouter>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Arch />} />
        <Route index path="/fileRename" element={<FileRename />} />
        <Route path="/404" element={<Err404 />} />
      </Routes>
    </HashRouter>
  </>
);

export default App;
