import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './DocumentsPage.css';

const DocumentsPage = () => {
  const location = useLocation();
  const [activeFolder, setActiveFolder] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [newDocument, setNewDocument] = useState({
    name: '',
    type: 'PDF',
    size: '',
    folder: 'finance',
    file: null
  });
  
  // Sample documents data
  const [documents, setDocuments] = useState([
    {
      id: 1,
      name: 'Q2 Financial Report.pdf',
      type: 'PDF',
      size: '2.4 MB',
      modified: '2025-07-15',
      owner: 'Robert Miller',
      folder: 'finance'
    },
    {
      id: 2,
      name: 'Marketing Strategy 2025.docx',
      type: 'DOCX',
      size: '1.8 MB',
      modified: '2025-07-10',
      owner: 'Jessica Lee',
      folder: 'marketing'
    },
    {
      id: 3,
      name: 'Product Roadmap.xlsx',
      type: 'XLSX',
      size: '3.2 MB',
      modified: '2025-07-05',
      owner: 'Alex Johnson',
      folder: 'product'
    },
    {
      id: 4,
      name: 'Employee Handbook.pdf',
      type: 'PDF',
      size: '5.1 MB',
      modified: '2025-06-28',
      owner: 'Jennifer Clark',
      folder: 'hr'
    },
    {
      id: 5,
      name: 'Client Presentation.pptx',
      type: 'PPTX',
      size: '8.7 MB',
      modified: '2025-07-18',
      owner: 'Michael Brown',
      folder: 'sales'
    },
    {
      id: 6,
      name: 'Project Timeline.xlsx',
      type: 'XLSX',
      size: '1.5 MB',
      modified: '2025-07-12',
      owner: 'Sarah Williams',
      folder: 'project'
    },
    {
      id: 7,
      name: 'Brand Guidelines.pdf',
      type: 'PDF',
      size: '4.3 MB',
      modified: '2025-06-20',
      owner: 'Jessica Lee',
      folder: 'marketing'
    },
    {
      id: 8,
      name: 'Technical Documentation.docx',
      type: 'DOCX',
      size: '2.9 MB',
      modified: '2025-07-08',
      owner: 'David Wilson',
      folder: 'product'
    }
  ]);
  
  // Folders data
  const folders = [
    { id: 'all', name: 'All Documents', count: documents.length },
    { id: 'finance', name: 'Finance', count: documents.filter(doc => doc.folder === 'finance').length },
    { id: 'marketing', name: 'Marketing', count: documents.filter(doc => doc.folder === 'marketing').length },
    { id: 'product', name: 'Product', count: documents.filter(doc => doc.folder === 'product').length },
    { id: 'hr', name: 'Human Resources', count: documents.filter(doc => doc.folder === 'hr').length },
    { id: 'sales', name: 'Sales', count: documents.filter(doc => doc.folder === 'sales').length },
    { id: 'project', name: 'Project Management', count: documents.filter(doc => doc.folder === 'project').length },
  ];
  
  useEffect(() => {
    // Check if we should open the upload modal based on navigation state
    if (location.state && location.state.openUploadModal) {
      setIsUploadModalOpen(true);
    }
  }, [location]);
  
  const handleUploadDocument = () => {
    setIsUploadModalOpen(true);
  };
  
  const closeUploadModal = () => {
    setIsUploadModalOpen(false);
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewDocument({
      ...newDocument,
      [name]: value
    });
  };
  
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Extract file extension to set document type
      const fileName = file.name;
      const fileExtension = fileName.split('.').pop().toUpperCase();
      
      // Calculate file size in MB
      const fileSizeInMB = (file.size / (1024 * 1024)).toFixed(1) + ' MB';
      
      setNewDocument({
        ...newDocument,
        name: fileName,
        type: fileExtension,
        size: fileSizeInMB,
        file: file
      });
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = documents.length > 0 ? Math.max(...documents.map(doc => doc.id)) + 1 : 1;
    
    const documentToAdd = {
      id,
      name: newDocument.name,
      type: newDocument.type,
      size: newDocument.size,
      modified: new Date().toISOString().split('T')[0],
      owner: 'Alex Johnson', // Current user
      folder: newDocument.folder
    };
    
    setDocuments([...documents, documentToAdd]);
    setNewDocument({
      name: '',
      type: 'PDF',
      size: '',
      folder: 'finance',
      file: null
    });
    setIsUploadModalOpen(false);
  };
  
  const filteredDocuments = activeFolder === 'all' 
    ? documents 
    : documents.filter(doc => doc.folder === activeFolder);
  
  const getDocumentIcon = (type) => {
    switch (type) {
      case 'PDF':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#E74C3C" viewBox="0 0 16 16">
            <path d="M5.523 12.424c.14-.082.293-.162.459-.238a7.878 7.878 0 0 1-.45.606c-.28.337-.498.516-.635.572a.266.266 0 0 1-.035.012.282.282 0 0 1-.026-.044c-.056-.11-.054-.216.04-.36.106-.165.319-.354.647-.548zm2.455-1.647c-.119.025-.237.05-.356.078a21.148 21.148 0 0 0 .5-1.05 12.045 12.045 0 0 0 .51.858c-.217.032-.436.07-.654.114zm2.525.939a3.881 3.881 0 0 1-.435-.41c.228.005.434.022.612.054.317.057.466.147.518.209a.095.095 0 0 1 .026.064.436.436 0 0 1-.06.2.307.307 0 0 1-.094.124.107.107 0 0 1-.069.015c-.09-.003-.258-.066-.498-.256zM8.278 6.97c-.04.244-.108.524-.2.829a4.86 4.86 0 0 1-.089-.346c-.076-.353-.087-.63-.046-.822.038-.177.11-.248.196-.283a.517.517 0 0 1 .145-.04c.013.03.028.092.032.198.005.122-.007.277-.038.465z"/>
            <path fill-rule="evenodd" d="M4 0h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H4z"/>
          </svg>
        );
      case 'DOCX':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#2B579A" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M4 0h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H4z"/>
            <path fill-rule="evenodd" d="M4.5 5.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7zm0 2a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7zm0 2a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4z"/>
          </svg>
        );
      case 'XLSX':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#217346" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M4 0h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H4z"/>
            <path fill-rule="evenodd" d="M6 11.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
          </svg>
        );
      case 'PPTX':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#D24726" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M4 0h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H4z"/>
            <path d="M6 4.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-1z"/>
          </svg>
        );
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
            <path d="M4 0h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H4z"/>
            <path d="M4.5 10.5A.5.5 0 0 1 5 10h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm0-2A.5.5 0 0 1 5 8h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm0-2A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm0-2A.5.5 0 0 1 5 4h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z"/>
          </svg>
        );
    }
  };
  
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <main className="container page-container">
      <div className="page-header">
        <h1>Documents</h1>
        <div className="documents-actions">
          <div className="view-toggle">
            <button 
              className={`view-toggle-btn ${viewMode === 'grid' ? 'active' : ''}`}
              onClick={() => setViewMode('grid')}
              aria-label="Grid view"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a1.5 1.5 0 0 1-1.5-1.5v-3z"/>
              </svg>
            </button>
            <button 
              className={`view-toggle-btn ${viewMode === 'list' ? 'active' : ''}`}
              onClick={() => setViewMode('list')}
              aria-label="List view"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
              </svg>
            </button>
          </div>
          <button className="create-button" onClick={handleUploadDocument}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
            </svg>
            Upload Document
          </button>
        </div>
      </div>
      
      <div className="documents-container">
        <div className="folders-sidebar">
          <h3>Folders</h3>
          <ul className="folders-list">
            {folders.map(folder => (
              <li 
                key={folder.id} 
                className={`folder-item \${activeFolder === folder.id ? 'active' : ''}`}
                onClick={() => setActiveFolder(folder.id)}
              >
                <div className="folder-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4H2.19zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707z"/>
                  </svg>
                </div>
                <div className="folder-details">
                  <span className="folder-name">{folder.name}</span>
                  <span className="folder-count">{folder.count} files</span>
                </div>
              </li>
            ))}
          </ul>
          
          <div className="storage-info">
            <h3>Storage</h3>
            <div className="storage-usage">
              <div className="storage-bar">
                <div className="storage-used" style={{ width: '65%' }}></div>
              </div>
              <div className="storage-text">
                <span>65% used</span>
                <span>16.25 GB / 25 GB</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="documents-content">
          <div className="documents-header">
            <h2>{folders.find(folder => folder.id === activeFolder)?.name}</h2>
            <div className="documents-search">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg>
              <input type="text" placeholder="Search documents..." />
            </div>
          </div>
          
          {viewMode === 'grid' ? (
            <div className="documents-grid">
              {filteredDocuments.map(doc => (
                <div key={doc.id} className="document-card">
                  <div className="document-icon">
                    {getDocumentIcon(doc.type)}
                  </div>
                  <div className="document-info">
                    <h3 className="document-name">{doc.name}</h3>
                    <div className="document-meta">
                      <span className="document-type">{doc.type}</span>
                      <span className="document-size">{doc.size}</span>
                    </div>
                    <div className="document-date">
                      <span>Modified {formatDate(doc.modified)}</span>
                    </div>
                    <div className="document-owner">
                      <span>Owner: {doc.owner}</span>
                    </div>
                  </div>
                  <div className="document-actions">
                    <button className="document-action-btn">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                        <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                      </svg>
                    </button>
                    <button className="document-action-btn">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                      </svg>
                    </button>
                    <button className="document-action-btn">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="documents-table">
              <div className="table-header">
                <div className="table-cell name-cell">Name</div>
                <div className="table-cell">Type</div>
                <div className="table-cell">Size</div>
                <div className="table-cell">Modified</div>
                <div className="table-cell">Owner</div>
                <div className="table-cell actions-cell">Actions</div>
              </div>
              {filteredDocuments.map(doc => (
                <div key={doc.id} className="table-row">
                  <div className="table-cell name-cell">
                    <div className="document-name-with-icon">
                      {getDocumentIcon(doc.type)}
                      <span>{doc.name}</span>
                    </div>
                  </div>
                  <div className="table-cell">{doc.type}</div>
                  <div className="table-cell">{doc.size}</div>
                  <div className="table-cell">{formatDate(doc.modified)}</div>
                  <div className="table-cell">{doc.owner}</div>
                  <div className="table-cell actions-cell">
                    <div className="table-actions">
                      <button className="document-action-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                          <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                        </svg>
                      </button>
                      <button className="document-action-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                        </svg>
                      </button>
                      <button className="document-action-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      
      {isUploadModalOpen && (
        <div className="modal-backdrop">
          <div className="upload-document-modal">
            <div className="modal-header">
              <h2>Upload New Document</h2>
              <button className="close-btn" onClick={closeUploadModal}>×</button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="file">Select File</label>
                <div className="file-upload-container">
                  <input
                    type="file"
                    id="file"
                    name="file"
                    onChange={handleFileChange}
                    className="file-input"
                    required
                  />
                  <label htmlFor="file" className="file-upload-label">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                      <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"/>
                    </svg>
                    {newDocument.file ? newDocument.file.name : 'Choose a file or drag it here'}
                  </label>
                </div>
              </div>
              
              {newDocument.file && (
                <div className="file-preview">
                  <div className="file-preview-icon">
                    {getDocumentIcon(newDocument.type)}
                  </div>
                  <div className="file-preview-details">
                    <span className="file-name">{newDocument.name}</span>
                    <span className="file-size">{newDocument.size}</span>
                  </div>
                </div>
              )}
              
              <div className="form-group">
                <label htmlFor="folder">Folder</label>
                <select
                  id="folder"
                  name="folder"
                  value={newDocument.folder}
                  onChange={handleInputChange}
                  required
                >
                  {folders.filter(folder => folder.id !== 'all').map(folder => (
                    <option key={folder.id} value={folder.id}>
                      {folder.name}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="name">Document Name (Optional)</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={newDocument.name}
                  onChange={handleInputChange}
                  placeholder="Keep original filename if empty"
                />
                <small className="form-help-text">Leave blank to use the original filename</small>
              </div>
              
              <div className="form-actions">
                <button type="button" className="cancel-btn" onClick={closeUploadModal}>Cancel</button>
                <button type="submit" className="submit-btn" disabled={!newDocument.file}>
                  Upload Document
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
};

export default DocumentsPage;
