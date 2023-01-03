using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataLayer
{
    public class DAL
    {
        private AigExamEntities entity = new AigExamEntities();
        public List<P_getArticlesByCategory_Result> GetArticlesByCategory(int categoryID)
        {
            return this.entity.P_getArticlesByCategory(categoryID).Select(e => e).ToList();
        }

        public List<V_getCategory> GetCategories()
        {
            return this.entity.V_getCategory.Select(e => e).ToList();
        }
    }
}
