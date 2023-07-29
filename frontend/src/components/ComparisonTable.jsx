import React from 'react'

const comparisonData = [
    {
        name: 'Hosting Service 1',
        logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAdVBMVEVnTMT///9lScNhRMJ9aMv39/xUMb9cPcFZOMBeP8Hn5PShlNjq5/bOyOpaOsBWNL+4ruGbjdbFvebZ1O6zqN96ZMqYh9Wsod3Uz+y7suLx7/m/t+RqUMVwWMfj3/OIds+Qf9KnmtpPKL2BbcxHG7tACLl1XskVH7lMAAAExElEQVR4nO2abbeyKhCGZUiBUjHNfEnT6nn6/z/xzACW7V2t8yVbZx3uL4bIcOEMrxYEXl5eXl5eXl5eXl5eXl7/LUEKzzOEWqb+S76SzxDE4QRLIMCKsbx7UpNMWLznfAGAkDGWyV8ICMDYenv+NIIFYKxKfyAYAMbarf4swgTA2k33DICxeLsMAGPbh6beABhbvegnSwGEHsADfAmgXhxgr8VdAH2yNECSzbRKuRjWywI86sAVF6fwewA4QwmlVPNFABZulBJ9EV6+BUATEXA1lh8FKI/r14rbvAP+yfqRQEfvJD9a+SSRSin1UxK8qT/8BgDGoo1/yfrgiCo+GgNB3yvVNW8C8dPd8BJmWqVd/jUA7IbhNuVpX38PgLHiknI1HL8HgJsTwKF/u7urOi4LwMITD7i66/z1BYkH8AD/e4A0XwYg4KvkKUAA1TIAuCJx08APgEBFWbgEACKIS/0EABG6Q7gEAPpB4Ey0+X0WA+KafPiA4oagN8OzeiAa6o8uy2cIL6p5eZLp5eXl5eX1ViAEn19RXEaRVtPEAkpHkaQJiN9PJ/m9gHIfzfjNAHA6rBDgzN5KoKlUaikeJnMYmoymd7w2dp3Bg30Sx/Wps8/xriowubkC3zfT4WQzAFyaxqwLquZEF8xtRmug29RxXGQXMn9xZcg4lLs8qZNsDGYIfIM7XonXE2M1HfPw0u0124FaBl1rk41KZycDleJbLKiDgPJ3KX28o/NCMjC4EqwEY94KjVMdRvHAHwBqB5DgFQJa3bXGBj3GC/xxRKYB0vunGbZTfO8AYkzuVSAavIsA/GLo1yELz8EMAI2bRDixvQBQuOZrS607rLNNA+ixSK9TOZC3tf6D7Tydtcb98RyAXWECCNZ4v9OpLsmjZD75o1HKJg7nqMfWZeoB4CyE3hgAqpDRu+eKGsZNepR88hq5oTKFHwFinloAPhKxiTjuzCdn2sS7RK4Cmdm23gHWuyzb1be3dNSUoRPLiQ0Kkwt/BxBi2fxsASgUktTUbzoOmT9VVXVyiUMkyJV5OgeYuUkgXW7oeGUs8cFkrbf6DUCP/hozA6BrChDaR+33l1kQhs4fx+xAQT7CK4DmB0DA3eeIg3wNUKqQtbkFKCyA2qEh4eIO1fJ5XdXtBdgYgL7vKgOgTpMLZE5dz4we/YY6RQdvAPa2bwjzAL1fAjhYgJr3KOeCkNp/mh3rmic0gHJBWOIzJQ1MkdsBASFgCzEiXwOAThwADQ8tFpoB3ALOBGG0oyiFR4B5N8SgO4ooimrnt0FGqfzbuv3YKwDoQgsAPf5IIn2u7gB/o/P5HNmAyIU6uiHvOQBfMTfy2DbDmh2ThKzDGxdgi/cWIBDG0XUS3wDClhTjWG66IVwfdpfzodi8K7WfRtITBXN5ixvxIwjvQzEBmBHMDMX08q2mILTdoHQApqe2YgKAsS6ou/N9UeyMZXXdxQh8KE2qGxPiT0Y7dKmqKCw9DEVBFXZ5UV8pUMopJ70c0EB7POBWFcaitkp6OmwvKpyTArx3315yKYW7uuERVCRlJGDKj6TA6dg9ruT0NwWubcFU2n+WgJ5yII00zujGApp1AlPE1CHlh//r4OXl5eXl5eXl5eXl5eX1b/UPxgJUmKPGcoEAAAAASUVORK5CYII=",
        features: {
          'Starting Price': '$10',
          'Free SSL': true,
          '24/7 Support': true,
          'cPanel': true,
          'Unlimited Domains': true,
          '1-Click WordPress Install': false,
        },
      },
      {
        name: 'Hosting Service 2',
        logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAdVBMVEVnTMT///9lScNhRMJ9aMv39/xUMb9cPcFZOMBeP8Hn5PShlNjq5/bOyOpaOsBWNL+4ruGbjdbFvebZ1O6zqN96ZMqYh9Wsod3Uz+y7suLx7/m/t+RqUMVwWMfj3/OIds+Qf9KnmtpPKL2BbcxHG7tACLl1XskVH7lMAAAExElEQVR4nO2abbeyKhCGZUiBUjHNfEnT6nn6/z/xzACW7V2t8yVbZx3uL4bIcOEMrxYEXl5eXl5eXl5eXl5eXl7/LUEKzzOEWqb+S76SzxDE4QRLIMCKsbx7UpNMWLznfAGAkDGWyV8ICMDYenv+NIIFYKxKfyAYAMbarf4swgTA2k33DICxeLsMAGPbh6beABhbvegnSwGEHsADfAmgXhxgr8VdAH2yNECSzbRKuRjWywI86sAVF6fwewA4QwmlVPNFABZulBJ9EV6+BUATEXA1lh8FKI/r14rbvAP+yfqRQEfvJD9a+SSRSin1UxK8qT/8BgDGoo1/yfrgiCo+GgNB3yvVNW8C8dPd8BJmWqVd/jUA7IbhNuVpX38PgLHiknI1HL8HgJsTwKF/u7urOi4LwMITD7i66/z1BYkH8AD/e4A0XwYg4KvkKUAA1TIAuCJx08APgEBFWbgEACKIS/0EABG6Q7gEAPpB4Ey0+X0WA+KafPiA4oagN8OzeiAa6o8uy2cIL6p5eZLp5eXl5eX1ViAEn19RXEaRVtPEAkpHkaQJiN9PJ/m9gHIfzfjNAHA6rBDgzN5KoKlUaikeJnMYmoymd7w2dp3Bg30Sx/Wps8/xriowubkC3zfT4WQzAFyaxqwLquZEF8xtRmug29RxXGQXMn9xZcg4lLs8qZNsDGYIfIM7XonXE2M1HfPw0u0124FaBl1rk41KZycDleJbLKiDgPJ3KX28o/NCMjC4EqwEY94KjVMdRvHAHwBqB5DgFQJa3bXGBj3GC/xxRKYB0vunGbZTfO8AYkzuVSAavIsA/GLo1yELz8EMAI2bRDixvQBQuOZrS607rLNNA+ixSK9TOZC3tf6D7Tydtcb98RyAXWECCNZ4v9OpLsmjZD75o1HKJg7nqMfWZeoB4CyE3hgAqpDRu+eKGsZNepR88hq5oTKFHwFinloAPhKxiTjuzCdn2sS7RK4Cmdm23gHWuyzb1be3dNSUoRPLiQ0Kkwt/BxBi2fxsASgUktTUbzoOmT9VVXVyiUMkyJV5OgeYuUkgXW7oeGUs8cFkrbf6DUCP/hozA6BrChDaR+33l1kQhs4fx+xAQT7CK4DmB0DA3eeIg3wNUKqQtbkFKCyA2qEh4eIO1fJ5XdXtBdgYgL7vKgOgTpMLZE5dz4we/YY6RQdvAPa2bwjzAL1fAjhYgJr3KOeCkNp/mh3rmic0gHJBWOIzJQ1MkdsBASFgCzEiXwOAThwADQ8tFpoB3ALOBGG0oyiFR4B5N8SgO4ooimrnt0FGqfzbuv3YKwDoQgsAPf5IIn2u7gB/o/P5HNmAyIU6uiHvOQBfMTfy2DbDmh2ThKzDGxdgi/cWIBDG0XUS3wDClhTjWG66IVwfdpfzodi8K7WfRtITBXN5ixvxIwjvQzEBmBHMDMX08q2mILTdoHQApqe2YgKAsS6ou/N9UeyMZXXdxQh8KE2qGxPiT0Y7dKmqKCw9DEVBFXZ5UV8pUMopJ70c0EB7POBWFcaitkp6OmwvKpyTArx3315yKYW7uuERVCRlJGDKj6TA6dg9ruT0NwWubcFU2n+WgJ5yII00zujGApp1AlPE1CHlh//r4OXl5eXl5eXl5eXl5eX1b/UPxgJUmKPGcoEAAAAASUVORK5CYII=",
        features: {
          'Starting Price': '$12',
          'Free SSL': true,
          '24/7 Support': true,
          'cPanel': false,
          'Unlimited Domains': true,
          '1-Click WordPress Install': true,
        },
      },
      {
        name: 'Hosting Service 3',
        logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAdVBMVEVnTMT///9lScNhRMJ9aMv39/xUMb9cPcFZOMBeP8Hn5PShlNjq5/bOyOpaOsBWNL+4ruGbjdbFvebZ1O6zqN96ZMqYh9Wsod3Uz+y7suLx7/m/t+RqUMVwWMfj3/OIds+Qf9KnmtpPKL2BbcxHG7tACLl1XskVH7lMAAAExElEQVR4nO2abbeyKhCGZUiBUjHNfEnT6nn6/z/xzACW7V2t8yVbZx3uL4bIcOEMrxYEXl5eXl5eXl5eXl5eXl7/LUEKzzOEWqb+S76SzxDE4QRLIMCKsbx7UpNMWLznfAGAkDGWyV8ICMDYenv+NIIFYKxKfyAYAMbarf4swgTA2k33DICxeLsMAGPbh6beABhbvegnSwGEHsADfAmgXhxgr8VdAH2yNECSzbRKuRjWywI86sAVF6fwewA4QwmlVPNFABZulBJ9EV6+BUATEXA1lh8FKI/r14rbvAP+yfqRQEfvJD9a+SSRSin1UxK8qT/8BgDGoo1/yfrgiCo+GgNB3yvVNW8C8dPd8BJmWqVd/jUA7IbhNuVpX38PgLHiknI1HL8HgJsTwKF/u7urOi4LwMITD7i66/z1BYkH8AD/e4A0XwYg4KvkKUAA1TIAuCJx08APgEBFWbgEACKIS/0EABG6Q7gEAPpB4Ey0+X0WA+KafPiA4oagN8OzeiAa6o8uy2cIL6p5eZLp5eXl5eX1ViAEn19RXEaRVtPEAkpHkaQJiN9PJ/m9gHIfzfjNAHA6rBDgzN5KoKlUaikeJnMYmoymd7w2dp3Bg30Sx/Wps8/xriowubkC3zfT4WQzAFyaxqwLquZEF8xtRmug29RxXGQXMn9xZcg4lLs8qZNsDGYIfIM7XonXE2M1HfPw0u0124FaBl1rk41KZycDleJbLKiDgPJ3KX28o/NCMjC4EqwEY94KjVMdRvHAHwBqB5DgFQJa3bXGBj3GC/xxRKYB0vunGbZTfO8AYkzuVSAavIsA/GLo1yELz8EMAI2bRDixvQBQuOZrS607rLNNA+ixSK9TOZC3tf6D7Tydtcb98RyAXWECCNZ4v9OpLsmjZD75o1HKJg7nqMfWZeoB4CyE3hgAqpDRu+eKGsZNepR88hq5oTKFHwFinloAPhKxiTjuzCdn2sS7RK4Cmdm23gHWuyzb1be3dNSUoRPLiQ0Kkwt/BxBi2fxsASgUktTUbzoOmT9VVXVyiUMkyJV5OgeYuUkgXW7oeGUs8cFkrbf6DUCP/hozA6BrChDaR+33l1kQhs4fx+xAQT7CK4DmB0DA3eeIg3wNUKqQtbkFKCyA2qEh4eIO1fJ5XdXtBdgYgL7vKgOgTpMLZE5dz4we/YY6RQdvAPa2bwjzAL1fAjhYgJr3KOeCkNp/mh3rmic0gHJBWOIzJQ1MkdsBASFgCzEiXwOAThwADQ8tFpoB3ALOBGG0oyiFR4B5N8SgO4ooimrnt0FGqfzbuv3YKwDoQgsAPf5IIn2u7gB/o/P5HNmAyIU6uiHvOQBfMTfy2DbDmh2ThKzDGxdgi/cWIBDG0XUS3wDClhTjWG66IVwfdpfzodi8K7WfRtITBXN5ixvxIwjvQzEBmBHMDMX08q2mILTdoHQApqe2YgKAsS6ou/N9UeyMZXXdxQh8KE2qGxPiT0Y7dKmqKCw9DEVBFXZ5UV8pUMopJ70c0EB7POBWFcaitkp6OmwvKpyTArx3315yKYW7uuERVCRlJGDKj6TA6dg9ruT0NwWubcFU2n+WgJ5yII00zujGApp1AlPE1CHlh//r4OXl5eXl5eXl5eXl5eX1b/UPxgJUmKPGcoEAAAAASUVORK5CYII=',
        features: {
          'Starting Price': '$8',
          'Free SSL': false,
          '24/7 Support': true,
          'cPanel': true,
          'Unlimited Domains': false,
          '1-Click WordPress Install': true,
        },
      },
    
      // Streaming Services
      {
        name: 'Streaming Service 1',
        logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAdVBMVEVnTMT///9lScNhRMJ9aMv39/xUMb9cPcFZOMBeP8Hn5PShlNjq5/bOyOpaOsBWNL+4ruGbjdbFvebZ1O6zqN96ZMqYh9Wsod3Uz+y7suLx7/m/t+RqUMVwWMfj3/OIds+Qf9KnmtpPKL2BbcxHG7tACLl1XskVH7lMAAAExElEQVR4nO2abbeyKhCGZUiBUjHNfEnT6nn6/z/xzACW7V2t8yVbZx3uL4bIcOEMrxYEXl5eXl5eXl5eXl5eXl7/LUEKzzOEWqb+S76SzxDE4QRLIMCKsbx7UpNMWLznfAGAkDGWyV8ICMDYenv+NIIFYKxKfyAYAMbarf4swgTA2k33DICxeLsMAGPbh6beABhbvegnSwGEHsADfAmgXhxgr8VdAH2yNECSzbRKuRjWywI86sAVF6fwewA4QwmlVPNFABZulBJ9EV6+BUATEXA1lh8FKI/r14rbvAP+yfqRQEfvJD9a+SSRSin1UxK8qT/8BgDGoo1/yfrgiCo+GgNB3yvVNW8C8dPd8BJmWqVd/jUA7IbhNuVpX38PgLHiknI1HL8HgJsTwKF/u7urOi4LwMITD7i66/z1BYkH8AD/e4A0XwYg4KvkKUAA1TIAuCJx08APgEBFWbgEACKIS/0EABG6Q7gEAPpB4Ey0+X0WA+KafPiA4oagN8OzeiAa6o8uy2cIL6p5eZLp5eXl5eX1ViAEn19RXEaRVtPEAkpHkaQJiN9PJ/m9gHIfzfjNAHA6rBDgzN5KoKlUaikeJnMYmoymd7w2dp3Bg30Sx/Wps8/xriowubkC3zfT4WQzAFyaxqwLquZEF8xtRmug29RxXGQXMn9xZcg4lLs8qZNsDGYIfIM7XonXE2M1HfPw0u0124FaBl1rk41KZycDleJbLKiDgPJ3KX28o/NCMjC4EqwEY94KjVMdRvHAHwBqB5DgFQJa3bXGBj3GC/xxRKYB0vunGbZTfO8AYkzuVSAavIsA/GLo1yELz8EMAI2bRDixvQBQuOZrS607rLNNA+ixSK9TOZC3tf6D7Tydtcb98RyAXWECCNZ4v9OpLsmjZD75o1HKJg7nqMfWZeoB4CyE3hgAqpDRu+eKGsZNepR88hq5oTKFHwFinloAPhKxiTjuzCdn2sS7RK4Cmdm23gHWuyzb1be3dNSUoRPLiQ0Kkwt/BxBi2fxsASgUktTUbzoOmT9VVXVyiUMkyJV5OgeYuUkgXW7oeGUs8cFkrbf6DUCP/hozA6BrChDaR+33l1kQhs4fx+xAQT7CK4DmB0DA3eeIg3wNUKqQtbkFKCyA2qEh4eIO1fJ5XdXtBdgYgL7vKgOgTpMLZE5dz4we/YY6RQdvAPa2bwjzAL1fAjhYgJr3KOeCkNp/mh3rmic0gHJBWOIzJQ1MkdsBASFgCzEiXwOAThwADQ8tFpoB3ALOBGG0oyiFR4B5N8SgO4ooimrnt0FGqfzbuv3YKwDoQgsAPf5IIn2u7gB/o/P5HNmAyIU6uiHvOQBfMTfy2DbDmh2ThKzDGxdgi/cWIBDG0XUS3wDClhTjWG66IVwfdpfzodi8K7WfRtITBXN5ixvxIwjvQzEBmBHMDMX08q2mILTdoHQApqe2YgKAsS6ou/N9UeyMZXXdxQh8KE2qGxPiT0Y7dKmqKCw9DEVBFXZ5UV8pUMopJ70c0EB7POBWFcaitkp6OmwvKpyTArx3315yKYW7uuERVCRlJGDKj6TA6dg9ruT0NwWubcFU2n+WgJ5yII00zujGApp1AlPE1CHlh//r4OXl5eXl5eXl5eXl5eX1b/UPxgJUmKPGcoEAAAAASUVORK5CYII=",
        features: {
          'HD Streaming': true,
          'Ad-Free Content': true,
          'Offline Downloads': true,
          '4K Streaming': false,
          'Live TV Channels': false,
          'Cloud DVR': false,
        },
      },
      {
        name: 'Streaming Service 2',
        logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAdVBMVEVnTMT///9lScNhRMJ9aMv39/xUMb9cPcFZOMBeP8Hn5PShlNjq5/bOyOpaOsBWNL+4ruGbjdbFvebZ1O6zqN96ZMqYh9Wsod3Uz+y7suLx7/m/t+RqUMVwWMfj3/OIds+Qf9KnmtpPKL2BbcxHG7tACLl1XskVH7lMAAAExElEQVR4nO2abbeyKhCGZUiBUjHNfEnT6nn6/z/xzACW7V2t8yVbZx3uL4bIcOEMrxYEXl5eXl5eXl5eXl5eXl7/LUEKzzOEWqb+S76SzxDE4QRLIMCKsbx7UpNMWLznfAGAkDGWyV8ICMDYenv+NIIFYKxKfyAYAMbarf4swgTA2k33DICxeLsMAGPbh6beABhbvegnSwGEHsADfAmgXhxgr8VdAH2yNECSzbRKuRjWywI86sAVF6fwewA4QwmlVPNFABZulBJ9EV6+BUATEXA1lh8FKI/r14rbvAP+yfqRQEfvJD9a+SSRSin1UxK8qT/8BgDGoo1/yfrgiCo+GgNB3yvVNW8C8dPd8BJmWqVd/jUA7IbhNuVpX38PgLHiknI1HL8HgJsTwKF/u7urOi4LwMITD7i66/z1BYkH8AD/e4A0XwYg4KvkKUAA1TIAuCJx08APgEBFWbgEACKIS/0EABG6Q7gEAPpB4Ey0+X0WA+KafPiA4oagN8OzeiAa6o8uy2cIL6p5eZLp5eXl5eX1ViAEn19RXEaRVtPEAkpHkaQJiN9PJ/m9gHIfzfjNAHA6rBDgzN5KoKlUaikeJnMYmoymd7w2dp3Bg30Sx/Wps8/xriowubkC3zfT4WQzAFyaxqwLquZEF8xtRmug29RxXGQXMn9xZcg4lLs8qZNsDGYIfIM7XonXE2M1HfPw0u0124FaBl1rk41KZycDleJbLKiDgPJ3KX28o/NCMjC4EqwEY94KjVMdRvHAHwBqB5DgFQJa3bXGBj3GC/xxRKYB0vunGbZTfO8AYkzuVSAavIsA/GLo1yELz8EMAI2bRDixvQBQuOZrS607rLNNA+ixSK9TOZC3tf6D7Tydtcb98RyAXWECCNZ4v9OpLsmjZD75o1HKJg7nqMfWZeoB4CyE3hgAqpDRu+eKGsZNepR88hq5oTKFHwFinloAPhKxiTjuzCdn2sS7RK4Cmdm23gHWuyzb1be3dNSUoRPLiQ0Kkwt/BxBi2fxsASgUktTUbzoOmT9VVXVyiUMkyJV5OgeYuUkgXW7oeGUs8cFkrbf6DUCP/hozA6BrChDaR+33l1kQhs4fx+xAQT7CK4DmB0DA3eeIg3wNUKqQtbkFKCyA2qEh4eIO1fJ5XdXtBdgYgL7vKgOgTpMLZE5dz4we/YY6RQdvAPa2bwjzAL1fAjhYgJr3KOeCkNp/mh3rmic0gHJBWOIzJQ1MkdsBASFgCzEiXwOAThwADQ8tFpoB3ALOBGG0oyiFR4B5N8SgO4ooimrnt0FGqfzbuv3YKwDoQgsAPf5IIn2u7gB/o/P5HNmAyIU6uiHvOQBfMTfy2DbDmh2ThKzDGxdgi/cWIBDG0XUS3wDClhTjWG66IVwfdpfzodi8K7WfRtITBXN5ixvxIwjvQzEBmBHMDMX08q2mILTdoHQApqe2YgKAsS6ou/N9UeyMZXXdxQh8KE2qGxPiT0Y7dKmqKCw9DEVBFXZ5UV8pUMopJ70c0EB7POBWFcaitkp6OmwvKpyTArx3315yKYW7uuERVCRlJGDKj6TA6dg9ruT0NwWubcFU2n+WgJ5yII00zujGApp1AlPE1CHlh//r4OXl5eXl5eXl5eXl5eX1b/UPxgJUmKPGcoEAAAAASUVORK5CYII=",
        features: {
          'HD Streaming': true,
          'Ad-Free Content': true,
          'Offline Downloads': false,
          '4K Streaming': true,
          'Live TV Channels': true,
          'Cloud DVR': false,
        },
      },
      {
        name: 'Streaming Service 3',
        logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAdVBMVEVnTMT///9lScNhRMJ9aMv39/xUMb9cPcFZOMBeP8Hn5PShlNjq5/bOyOpaOsBWNL+4ruGbjdbFvebZ1O6zqN96ZMqYh9Wsod3Uz+y7suLx7/m/t+RqUMVwWMfj3/OIds+Qf9KnmtpPKL2BbcxHG7tACLl1XskVH7lMAAAExElEQVR4nO2abbeyKhCGZUiBUjHNfEnT6nn6/z/xzACW7V2t8yVbZx3uL4bIcOEMrxYEXl5eXl5eXl5eXl5eXl7/LUEKzzOEWqb+S76SzxDE4QRLIMCKsbx7UpNMWLznfAGAkDGWyV8ICMDYenv+NIIFYKxKfyAYAMbarf4swgTA2k33DICxeLsMAGPbh6beABhbvegnSwGEHsADfAmgXhxgr8VdAH2yNECSzbRKuRjWywI86sAVF6fwewA4QwmlVPNFABZulBJ9EV6+BUATEXA1lh8FKI/r14rbvAP+yfqRQEfvJD9a+SSRSin1UxK8qT/8BgDGoo1/yfrgiCo+GgNB3yvVNW8C8dPd8BJmWqVd/jUA7IbhNuVpX38PgLHiknI1HL8HgJsTwKF/u7urOi4LwMITD7i66/z1BYkH8AD/e4A0XwYg4KvkKUAA1TIAuCJx08APgEBFWbgEACKIS/0EABG6Q7gEAPpB4Ey0+X0WA+KafPiA4oagN8OzeiAa6o8uy2cIL6p5eZLp5eXl5eX1ViAEn19RXEaRVtPEAkpHkaQJiN9PJ/m9gHIfzfjNAHA6rBDgzN5KoKlUaikeJnMYmoymd7w2dp3Bg30Sx/Wps8/xriowubkC3zfT4WQzAFyaxqwLquZEF8xtRmug29RxXGQXMn9xZcg4lLs8qZNsDGYIfIM7XonXE2M1HfPw0u0124FaBl1rk41KZycDleJbLKiDgPJ3KX28o/NCMjC4EqwEY94KjVMdRvHAHwBqB5DgFQJa3bXGBj3GC/xxRKYB0vunGbZTfO8AYkzuVSAavIsA/GLo1yELz8EMAI2bRDixvQBQuOZrS607rLNNA+ixSK9TOZC3tf6D7Tydtcb98RyAXWECCNZ4v9OpLsmjZD75o1HKJg7nqMfWZeoB4CyE3hgAqpDRu+eKGsZNepR88hq5oTKFHwFinloAPhKxiTjuzCdn2sS7RK4Cmdm23gHWuyzb1be3dNSUoRPLiQ0Kkwt/BxBi2fxsASgUktTUbzoOmT9VVXVyiUMkyJV5OgeYuUkgXW7oeGUs8cFkrbf6DUCP/hozA6BrChDaR+33l1kQhs4fx+xAQT7CK4DmB0DA3eeIg3wNUKqQtbkFKCyA2qEh4eIO1fJ5XdXtBdgYgL7vKgOgTpMLZE5dz4we/YY6RQdvAPa2bwjzAL1fAjhYgJr3KOeCkNp/mh3rmic0gHJBWOIzJQ1MkdsBASFgCzEiXwOAThwADQ8tFpoB3ALOBGG0oyiFR4B5N8SgO4ooimrnt0FGqfzbuv3YKwDoQgsAPf5IIn2u7gB/o/P5HNmAyIU6uiHvOQBfMTfy2DbDmh2ThKzDGxdgi/cWIBDG0XUS3wDClhTjWG66IVwfdpfzodi8K7WfRtITBXN5ixvxIwjvQzEBmBHMDMX08q2mILTdoHQApqe2YgKAsS6ou/N9UeyMZXXdxQh8KE2qGxPiT0Y7dKmqKCw9DEVBFXZ5UV8pUMopJ70c0EB7POBWFcaitkp6OmwvKpyTArx3315yKYW7uuERVCRlJGDKj6TA6dg9ruT0NwWubcFU2n+WgJ5yII00zujGApp1AlPE1CHlh//r4OXl5eXl5eXl5eXl5eX1b/UPxgJUmKPGcoEAAAAASUVORK5CYII=",
        features: {
          'HD Streaming': true,
          'Ad-Free Content': true,
          'Offline Downloads': true,
          '4K Streaming': true,
          'Live TV Channels': true,
          'Cloud DVR': true,
        },
      },
  ];
  

const ComparisonTable = () => {

    // Add these icons at the beginning of your ComparisonTable.js file

const CheckIcon = () => <span className="text-green-500">✓</span>;
const CrossIcon = () => <span className="text-red-500">✕</span>;

  return (
    <div class="bg-white shadow-md rounded-lg overflow-x-auto p-4 sm:p-8">
  <div class="w-full overflow-x-auto">
    <table class="w-full">
      <thead>
        <tr class="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
          <th class="border p-2 sm:p-4">Features / Services</th>
          {comparisonData.map((service) => (
            <th key={service.name} class="border p-2 sm:p-4">
              <img src={service.logo} alt={service.name} class="w-8 h-8 sm:w-12  mx-auto mb-2" />
              <span>{service.name}</span>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {Object.keys(comparisonData[0].features).map((feature) => (
          <tr key={feature} class="border">
            <td class="border p-2 sm:p-4">{feature}</td>
            {comparisonData.map((service) => (
              <td key={service.name} class="border p-2 sm:p-4 text-center">
                {service.features[feature] ? <CheckIcon /> : <CrossIcon />}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

  )
}

export default ComparisonTable