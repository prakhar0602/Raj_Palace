import React from 'react';

const Test = () => {
    const links = [
        "https://datanodes.to/kkp9ryyxbive/Mortal_Kombat_11_–_fitgirl-repacks.site_–_.part001.rar",
        "https://datanodes.to/7v2ropcm2ogf/Mortal_Kombat_11_–_fitgirl-repacks.site_–_.part002.rar",
        "https://datanodes.to/v4rwrb9gz22g/Mortal_Kombat_11_–_fitgirl-repacks.site_–_.part003.rar",
        "https://datanodes.to/vv4lmjv2p896/Mortal_Kombat_11_–_fitgirl-repacks.site_–_.part004.rar",
        "https://datanodes.to/kd5t8gpef1bx/Mortal_Kombat_11_–_fitgirl-repacks.site_–_.part005.rar",
        "https://datanodes.to/60mvyamune88/Mortal_Kombat_11_–_fitgirl-repacks.site_–_.part006.rar",
        "https://datanodes.to/zhqbap19f64g/Mortal_Kombat_11_–_fitgirl-repacks.site_–_.part007.rar",
        "https://datanodes.to/flxzqypokwto/Mortal_Kombat_11_–_fitgirl-repacks.site_–_.part008.rar",
        "https://datanodes.to/pb1rtl6if1fp/Mortal_Kombat_11_–_fitgirl-repacks.site_–_.part009.rar",
        "https://datanodes.to/593ibic5kwt8/Mortal_Kombat_11_–_fitgirl-repacks.site_–_.part010.rar"
    ];

    const downloadAllFiles = () => {
        links.forEach(link => {
            const anchor = document.createElement('a');
            anchor.href = link;
            anchor.download = link.split('/').pop(); // Extracts the filename from the URL
            anchor.click();
        });
    };

    return (
        <div>
            <h1>Download Mortal Kombat 11 Parts</h1>
            <button 
                onClick={downloadAllFiles} 
                style={{
                    padding: '10px 20px',
                    backgroundColor: '#007bff',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer'
                }}
            >
                Download All
            </button>
        </div>
    );
};

export default Test;
